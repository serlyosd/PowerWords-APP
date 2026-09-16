const STORAGE_KEY = "lumina-progress-v1";
const APP_VERSION = "1.3.0";
const SUCCESS_TARGET = 15;
const SESSION_SIZE = 21;
const defaults = { name: "Bia", pin: "", masterConfigured: false, rewardName: "", cycleStarted: "", streak: 0, history: [], reward: false, activeSession: null };
let state = loadState();
let session = null;
let speechRun = 0;
let touchStartX = 0;
let suppressCardClick = false;

const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
const todayKey = () => new Date().toLocaleDateString("en-CA");

function loadState() {
  try { return { ...defaults, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
  catch { return { ...defaults }; }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function showScreen(id) { screens.forEach((screen) => screen.classList.toggle("active", screen.id === id)); window.scrollTo(0, 0); }
function dateOffset(days) { const date = new Date(); date.setDate(date.getDate() + days); return date.toLocaleDateString("en-CA"); }
function seededSelection(date) {
  const seed = [...date].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return Array.from({ length: SESSION_SIZE }, (_, index) => LUMINA_WORDS[(seed * 13 + index * 47) % LUMINA_WORDS.length]);
}
function sessionCards() { return seededSelection(session.date); }
function freshSession() { return { date: todayKey(), phase: "study", index: 0, confirmed: [], flipped: false, quizIndex: 0, answers: [] }; }
function normalizeSession(saved) {
  if (!saved || saved.date !== todayKey()) return freshSession();
  return { ...freshSession(), ...saved, confirmed: saved.confirmed || [], answers: saved.answers || [] };
}
function refreshDashboard() {
  const successful = state.history.filter((item) => item.success);
  $("#welcomeTitle").innerHTML = `Olá, ${escapeHtml(state.name)}! <span>☀️</span>`;
  $("#streakNumber").textContent = state.streak;
  $("#progressRing").style.setProperty("--progress", `${state.streak * 72}deg`);
  $("#progressRing").setAttribute("aria-label", `${state.streak} de 5 dias concluídos`);
  $("#streakMessage").textContent = state.streak ? `${state.streak} ${state.streak === 1 ? "dia iluminado" : "dias iluminados"}!` : "Sua luz começa hoje";
  $("#streakHint").textContent = state.streak ? `Faltam ${5 - state.streak} para o Ticket Dourado.` : "Complete 5 dias seguidos para liberar o Ticket Dourado.";
  $("#weekScore").textContent = `${successful.filter((x) => x.date >= dateOffset(-4)).length}/5`;
  $("#rewardName").textContent = state.rewardName || "Recompensa ainda não configurada";
  $("#cycleStatus").textContent = state.cycleStarted ? `Ciclo ativo desde ${new Date(`${state.cycleStarted}T12:00:00`).toLocaleDateString("pt-BR")}` : "Aguardando ativação do Master";
  $("#dayRow").innerHTML = Array.from({ length: 5 }, (_, i) => {
    const date = dateOffset(i - 4); const result = state.history.find((x) => x.date === date);
    const weekday = new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
    return `<span class="day ${result?.success ? "success" : ""} ${date === todayKey() ? "today" : ""}"><b>${result?.success ? "✓" : new Date(`${date}T12:00:00`).getDate()}</b>${weekday}</span>`;
  }).join("");
  const completedToday = state.history.some((item) => item.date === todayKey());
  $("#startButton").disabled = completedToday;
  $("#startButton span").textContent = completedToday ? "Missão de hoje concluída" : state.activeSession ? "Continuar Missão do Dia" : "Iniciar Missão do Dia";
}
function startSession() {
  session = normalizeSession(state.activeSession);
  state.activeSession = session; saveState();
  if (session.phase === "quiz") { showScreen("quizScreen"); renderQuiz(); }
  else if (session.phase === "summary") showSummary();
  else { showScreen("studyScreen"); renderCard(); }
}
function renderCard() {
  const word = sessionCards()[session.index];
  $("#studyWord").textContent = word.word; $("#cardWord").textContent = word.word;
  $("#definition").textContent = word.definition; $("#example").textContent = word.example; $("#example2").textContent = word.example2;
  $("#synonyms").textContent = word.synonyms; $("#antonyms").textContent = word.antonyms;
  $("#cardCount").textContent = `${session.index + 1} de ${SESSION_SIZE}`;
  $("#sessionProgress").style.width = `${((session.index + 1) / SESSION_SIZE) * 100}%`;
  $("#flashcard").classList.toggle("flipped", Boolean(session.flipped));
  $("#tapHint").textContent = session.flipped ? "Confira o significado e confirme quando entender" : "Toque na carta para revelar";
  const confirmed = session.confirmed.includes(session.index);
  $("#confirmCard").textContent = confirmed ? "✓ Palavra confirmada" : "Entendi esta palavra ✓";
  $("#confirmCard").classList.toggle("confirmed", confirmed);
  $("#previousCard").disabled = session.index === 0;
  $("#nextCard").disabled = !confirmed;
  $("#nextCard").textContent = session.index === SESSION_SIZE - 1 ? "Ver resumo →" : "Próxima →";
}
function flipCard() {
  session.flipped = !session.flipped; state.activeSession = session; saveState(); renderCard();
  if (session.flipped) speakWordTwice();
}
function confirmCurrentCard() {
  if (!session.flipped) { toast("Vire a carta e leia o significado primeiro."); return; }
  if (!session.confirmed.includes(session.index)) session.confirmed.push(session.index);
  state.activeSession = session; saveState(); renderCard();
}
function moveCard(direction) {
  const next = session.index + direction;
  if (direction > 0 && !session.confirmed.includes(session.index)) return;
  if (next >= SESSION_SIZE) { session.phase = "summary"; state.activeSession = session; saveState(); showSummary(); return; }
  if (next < 0) return;
  session.index = next; session.flipped = false; state.activeSession = session; saveState(); renderCard();
}
function speakWordTwice() {
  if (!session || !("speechSynthesis" in window)) return;
  const run = ++speechRun; const word = sessionCards()[session.index].word; speechSynthesis.cancel();
  const speak = (remaining) => {
    if (run !== speechRun || remaining === 0) return;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "pt-BR"; utterance.rate = 0.78;
    utterance.onend = () => setTimeout(() => speak(remaining - 1), 450);
    speechSynthesis.speak(utterance);
  };
  speak(2);
}
function showSummary() {
  session.phase = "summary"; state.activeSession = session; saveState();
  $("#summaryList").innerHTML = sessionCards().map((word, index) => `<article class="summary-item"><span>${String(index + 1).padStart(2, "0")}</span><div><h2>${escapeHtml(word.word)}</h2><p>${escapeHtml(word.definition)}</p><small><b>Sinônimos:</b> ${escapeHtml(word.synonyms)}</small></div></article>`).join("");
  showScreen("summaryScreen");
}
function quizOrder() { return Array.from({ length: SESSION_SIZE }, (_, index) => (index * 8 + 5) % SESSION_SIZE); }
function quizOptions(cardIndex, questionIndex) {
  const cards = sessionCards();
  const indexes = [cardIndex, (cardIndex + 5) % SESSION_SIZE, (cardIndex + 10) % SESSION_SIZE, (cardIndex + 15) % SESSION_SIZE];
  const rotation = questionIndex % 4;
  return [...indexes.slice(rotation), ...indexes.slice(0, rotation)].map((index) => cards[index]);
}
function beginQuiz() {
  if (!confirm("O Quiz só pode ser respondido uma vez hoje. Deseja começar agora?")) return;
  session.phase = "quiz"; session.quizIndex = 0; session.answers = []; state.activeSession = session; saveState(); showScreen("quizScreen"); renderQuiz();
}
function renderQuiz() {
  const order = quizOrder(); const cardIndex = order[session.quizIndex]; const word = sessionCards()[cardIndex];
  $("#quizCount").textContent = `${session.quizIndex + 1} de ${SESSION_SIZE}`;
  $("#quizProgress").style.width = `${(session.quizIndex / SESSION_SIZE) * 100}%`;
  $("#quizDefinition").textContent = word.definition;
  $("#quizOptions").innerHTML = quizOptions(cardIndex, session.quizIndex).map((option) => `<button type="button" data-answer="${escapeHtml(option.word)}">${escapeHtml(option.word)}</button>`).join("");
}
function answerQuiz(selected) {
  const order = quizOrder(); const correct = sessionCards()[order[session.quizIndex]].word;
  session.answers.push({ word: correct, selected, correct: selected === correct }); session.quizIndex += 1;
  state.activeSession = session; saveState();
  if (session.quizIndex >= SESSION_SIZE) finishQuiz(); else renderQuiz();
}
function finishQuiz() {
  const score = session.answers.filter((answer) => answer.correct).length;
  const percent = Math.round((score / SESSION_SIZE) * 100); const success = score >= SUCCESS_TARGET;
  const yesterdaySuccessful = state.history.some((item) => item.date === dateOffset(-1) && item.success);
  state.streak = success ? (yesterdaySuccessful ? state.streak + 1 : 1) : 0;
  state.history = [...state.history.filter((item) => item.date !== todayKey()), { date: todayKey(), success, score, percent }].slice(-30);
  state.activeSession = null; if (state.streak >= 5) state.reward = true; saveState();
  $("#resultIcon").textContent = success ? "🥳" : "🌱";
  $("#resultTitle").textContent = success ? "Meta do dia alcançada!" : "Você está aprendendo!";
  $("#resultCopy").textContent = success ? "Parabéns! Você superou a meta de 70% e iluminou mais um dia." : "Amanhã será uma nova oportunidade para fortalecer essas palavras.";
  $("#quizScore").textContent = `${score}/${SESSION_SIZE}`; $("#quizPercent").textContent = `${percent}% de acertos`;
  const missed = session.answers.filter((answer) => !answer.correct).map((answer) => answer.word);
  $("#reviewNeeded").innerHTML = missed.length ? `<b>Revise depois:</b><p>${missed.map(escapeHtml).join(", ")}</p>` : "<b>Você acertou todas as palavras!</b>";
  if (success) createConfetti(); showScreen("resultScreen"); session = null;
}
function showReward() { createConfetti(); $("#rewardTitle").textContent = `Você conquistou: ${state.rewardName}!`; showScreen("rewardScreen"); }
function createConfetti() { const pieces = Array.from({ length: 50 }, (_, i) => `<i style="--x:${(i * 37) % 100}%;--c:${["#7457f5","#32c7e8","#f7bd3b","#ff6b68","#57d8ad"][i % 5]};--d:${3 + i % 4}s;--delay:-${i % 5}s;--r:${i * 29}deg"></i>`).join(""); document.querySelectorAll(".confetti").forEach((element) => { element.innerHTML = pieces; }); }
function toast(message) { const el = $("#toast"); el.textContent = message; el.classList.add("show"); setTimeout(() => el.classList.remove("show"), 2400); }
function escapeHtml(value) { const node = document.createElement("span"); node.textContent = value; return node.innerHTML; }

$("#startButton").addEventListener("click", startSession);
$("#flashcard").addEventListener("click", (event) => { if (suppressCardClick) { suppressCardClick = false; return; } if (!event.target.closest("button")) flipCard(); });
$("#flashcard").addEventListener("keydown", (event) => { if ((event.key === "Enter" || event.key === " ") && !event.target.closest("button")) { event.preventDefault(); flipCard(); } });
$("#flashcard").addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
$("#flashcard").addEventListener("touchend", (event) => { const distance = event.changedTouches[0].clientX - touchStartX; if (Math.abs(distance) < 55) return; suppressCardClick = true; moveCard(distance > 0 ? -1 : 1); }, { passive: true });
$("#cardSpeakButton").addEventListener("click", (event) => { event.stopPropagation(); speakWordTwice(); });
$("#confirmCard").addEventListener("click", confirmCurrentCard);
$("#previousCard").addEventListener("click", () => moveCard(-1));
$("#nextCard").addEventListener("click", () => moveCard(1));
$("#closeStudy").addEventListener("click", () => { speechRun += 1; if ("speechSynthesis" in window) speechSynthesis.cancel(); saveState(); refreshDashboard(); showScreen("dashboardScreen"); });
$("#backToCards").addEventListener("click", () => { session.phase = "study"; session.index = SESSION_SIZE - 1; session.flipped = true; state.activeSession = session; saveState(); showScreen("studyScreen"); renderCard(); });
$("#startQuizButton").addEventListener("click", beginQuiz);
$("#quizOptions").addEventListener("click", (event) => { const button = event.target.closest("[data-answer]"); if (button) answerQuiz(button.dataset.answer); });
$("#finishButton").addEventListener("click", () => { refreshDashboard(); state.reward ? showReward() : showScreen("dashboardScreen"); });
$("#settingsButton").addEventListener("click", () => { $("#studentName").value = state.name; $("#settingsReward").value = state.rewardName; $("#currentMasterPin").value = ""; $("#masterPin").value = ""; $("#settingsDialog").showModal(); });
$("#updateButton")?.addEventListener("click", async () => { $("#updateButton").textContent = "Atualizando…"; if ("caches" in window) await Promise.all((await caches.keys()).map((key) => caches.delete(key))); if ("serviceWorker" in navigator) await Promise.all((await navigator.serviceWorker.getRegistrations()).map((registration) => registration.unregister())); location.replace(`${location.origin}${location.pathname}?v=${APP_VERSION}&atualizar=${Date.now()}`); });
$("#masterAreaButton")?.addEventListener("click", () => { $("#resetPin").value = ""; $("#resetError").textContent = ""; $("#resetDialog").showModal(); });
$("#closeReset")?.addEventListener("click", () => $("#resetDialog").close());
$("#resetForm")?.addEventListener("submit", (event) => { event.preventDefault(); if ($("#resetPin").value !== state.pin) { $("#resetError").textContent = "PIN incorreto. Tente novamente."; return; } if (!confirm("Apagar o treino e voltar à configuração inicial?")) return; state = { ...defaults, history: [] }; session = null; saveState(); $("#resetDialog").close(); refreshDashboard(); $("#onboardingForm").reset(); $("#setupName").value = "Bia"; $("#setupError").textContent = ""; $("#onboardingDialog").showModal(); });
$("#settingsForm").addEventListener("submit", (event) => { if (event.submitter?.value !== "save") return; event.preventDefault(); if ($("#currentMasterPin").value !== state.pin) return toast("PIN atual incorreto."); const pin = $("#masterPin").value; if (pin && !/^\d{4}$/.test(pin)) return toast("O novo PIN precisa ter 4 números."); state.name = $("#studentName").value.trim() || "Bia"; state.rewardName = $("#settingsReward").value.trim() || state.rewardName; if (pin) state.pin = pin; saveState(); $("#settingsDialog").close(); refreshDashboard(); toast("Configuração do Master atualizada!"); });
$("#resetData").addEventListener("click", () => { if ($("#currentMasterPin").value !== state.pin) return toast("Digite o PIN atual para reiniciar."); if (!confirm("Apagar a configuração do Master e todo o progresso?")) return; state = { ...defaults, history: [] }; saveState(); $("#settingsDialog").close(); refreshDashboard(); $("#onboardingDialog").showModal(); });
$("#validateButton").addEventListener("click", () => { $("#pinAttempt").value = ""; $("#pinError").textContent = ""; $("#pinDialog").showModal(); });
$("#pinForm").addEventListener("submit", (event) => { if (event.submitter?.value !== "validate") return; event.preventDefault(); if ($("#pinAttempt").value !== state.pin) { $("#pinError").textContent = "PIN incorreto. Peça ajuda ao Master."; return; } state.streak = 0; state.reward = false; state.history = []; state.cycleStarted = todayKey(); saveState(); $("#pinDialog").close(); refreshDashboard(); showScreen("dashboardScreen"); toast("Prêmio entregue! Um novo ciclo começou."); });
$("#onboardingForm").addEventListener("submit", (event) => { event.preventDefault(); const pin = $("#setupPin").value; const confirmation = $("#setupPinConfirm").value; if (!/^\d{4}$/.test(pin)) { $("#setupError").textContent = "Crie um PIN com exatamente 4 números."; return; } if (pin !== confirmation) { $("#setupError").textContent = "Os dois PINs não são iguais."; return; } state = { ...state, name: $("#setupName").value.trim() || "Bia", rewardName: $("#setupReward").value.trim(), pin, masterConfigured: true, cycleStarted: todayKey(), streak: 0, history: [], reward: false, activeSession: null }; saveState(); $("#onboardingDialog").close(); $("#rewardConfirmation").textContent = state.rewardName; refreshDashboard(); $("#setupSuccessDialog").showModal(); });

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("service-worker.js?v=6").then((registration) => registration.update());
refreshDashboard(); if (!state.masterConfigured) $("#onboardingDialog").showModal(); else if (state.reward) showReward();
