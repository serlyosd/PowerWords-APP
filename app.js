const STORAGE_KEY = "lumina-progress-v1";
const SUCCESS_TARGET = 17;
const SESSION_SIZE = 21;
const defaults = { name: "Bia", pin: "", masterConfigured: false, rewardName: "", cycleStarted: "", streak: 0, history: [], reward: false, activeSession: null };
let state = loadState();
let session = null;

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
  session = state.activeSession?.date === todayKey() ? state.activeSession : { date: todayKey(), index: 0, ratings: [], flipped: false };
  state.activeSession = session; saveState(); showScreen("studyScreen"); renderCard();
}
function renderCard() {
  const word = seededSelection(session.date)[session.index];
  $("#studyWord").textContent = word.word; $("#cardWord").textContent = word.word;
  $("#definition").textContent = word.definition; $("#example").textContent = word.example; $("#synonyms").textContent = word.synonyms; $("#antonyms").textContent = word.antonyms;
  $("#cardCount").textContent = `${session.index + 1} de ${SESSION_SIZE}`;
  $("#sessionProgress").style.width = `${(session.index / SESSION_SIZE) * 100}%`;
  $("#flashcard").classList.remove("flipped"); $("#ratingPanel").classList.remove("visible");
  $("#ratingPanel").setAttribute("aria-hidden", "true"); $("#tapHint").textContent = "Toque na carta para revelar";
  setTimeout(speakCurrentWord, 250);
}
function flipCard() {
  if ($("#flashcard").classList.contains("flipped")) return;
  $("#flashcard").classList.add("flipped"); $("#ratingPanel").classList.add("visible");
  $("#ratingPanel").setAttribute("aria-hidden", "false"); $("#tapHint").textContent = "Agora avalie como foi lembrar";
}
function rate(rating) {
  if (!$("#flashcard").classList.contains("flipped")) return;
  session.ratings.push(rating); session.index += 1; state.activeSession = session; saveState();
  if (session.index >= SESSION_SIZE) finishSession(); else renderCard();
}
function finishSession() {
  const easy = session.ratings.filter((rating) => rating === "easy").length;
  const success = easy >= SUCCESS_TARGET;
  const yesterdaySuccessful = state.history.some((item) => item.date === dateOffset(-1) && item.success);
  state.streak = success ? (yesterdaySuccessful ? state.streak + 1 : 1) : 0;
  state.history = [...state.history.filter((item) => item.date !== todayKey()), { date: todayKey(), success, easy }].slice(-30);
  state.activeSession = null;
  if (state.streak >= 5) state.reward = true;
  saveState(); $("#easyScore").textContent = easy;
  $("#resultIcon").textContent = success ? "✦" : "↻";
  $("#resultTitle").textContent = success ? "Mandou muito bem!" : "Cada tentativa ilumina!";
  $("#resultCopy").textContent = success ? "Meta diária alcançada. Mais um brilho no seu ciclo!" : `Você precisa marcar “Foi fácil” em ${SUCCESS_TARGET} palavras. Amanhã começa uma nova sequência.`;
  showScreen("resultScreen"); session = null;
}
function speakCurrentWord() {
  if (!session || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(seededSelection(session.date)[session.index].word);
  utterance.lang = "pt-BR"; utterance.rate = 0.82; speechSynthesis.speak(utterance);
}
function showReward() { createConfetti(); $("#rewardTitle").textContent = `Você conquistou: ${state.rewardName}!`; showScreen("rewardScreen"); }
function createConfetti() { $("#confetti").innerHTML = Array.from({ length: 50 }, (_, i) => `<i style="--x:${(i * 37) % 100}%;--c:${["#7457f5","#32c7e8","#f7bd3b","#ff6b68","#57d8ad"][i % 5]};--d:${3 + i % 4}s;--delay:-${i % 5}s;--r:${i * 29}deg"></i>`).join(""); }
function toast(message) { const el = $("#toast"); el.textContent = message; el.classList.add("show"); setTimeout(() => el.classList.remove("show"), 2400); }
function escapeHtml(value) { const node = document.createElement("span"); node.textContent = value; return node.innerHTML; }

$("#startButton").addEventListener("click", startSession);
$("#flashcard").addEventListener("click", flipCard);
$("#speakButton").addEventListener("click", speakCurrentWord);
$("#closeStudy").addEventListener("click", () => { saveState(); refreshDashboard(); showScreen("dashboardScreen"); });
document.querySelectorAll("[data-rating]").forEach((button) => button.addEventListener("click", () => rate(button.dataset.rating)));
$("#finishButton").addEventListener("click", () => { refreshDashboard(); state.reward ? showReward() : showScreen("dashboardScreen"); });
$("#settingsButton").addEventListener("click", () => { $("#studentName").value = state.name; $("#settingsReward").value = state.rewardName; $("#currentMasterPin").value = ""; $("#masterPin").value = ""; $("#settingsDialog").showModal(); });
$("#masterAreaButton")?.addEventListener("click", () => { $("#resetPin").value = ""; $("#resetError").textContent = ""; $("#resetDialog").showModal(); });
$("#closeReset")?.addEventListener("click", () => $("#resetDialog").close());
$("#resetForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if ($("#resetPin").value !== state.pin) { $("#resetError").textContent = "PIN incorreto. Tente novamente."; return; }
  if (!confirm("Apagar o treino e voltar à configuração inicial?")) return;
  state = { ...defaults, history: [] }; session = null; saveState();
  $("#resetDialog").close(); refreshDashboard(); $("#onboardingForm").reset();
  $("#setupName").value = "Bia"; $("#setupError").textContent = ""; $("#onboardingDialog").showModal();
});
$("#settingsForm").addEventListener("submit", (event) => { if (event.submitter?.value !== "save") return; event.preventDefault(); if ($("#currentMasterPin").value !== state.pin) return toast("PIN atual incorreto."); const pin = $("#masterPin").value; if (pin && !/^\d{4}$/.test(pin)) return toast("O novo PIN precisa ter 4 números."); state.name = $("#studentName").value.trim() || "Bia"; state.rewardName = $("#settingsReward").value.trim() || state.rewardName; if (pin) state.pin = pin; saveState(); $("#settingsDialog").close(); refreshDashboard(); toast("Configuração do Master atualizada!"); });
$("#resetData").addEventListener("click", () => { if ($("#currentMasterPin").value !== state.pin) return toast("Digite o PIN atual para reiniciar."); if (!confirm("Apagar a configuração do Master e todo o progresso?")) return; state = { ...defaults, history: [] }; saveState(); $("#settingsDialog").close(); refreshDashboard(); $("#onboardingDialog").showModal(); });
$("#validateButton").addEventListener("click", () => { $("#pinAttempt").value = ""; $("#pinError").textContent = ""; $("#pinDialog").showModal(); });
$("#pinForm").addEventListener("submit", (event) => { if (event.submitter?.value !== "validate") return; event.preventDefault(); if ($("#pinAttempt").value !== state.pin) { $("#pinError").textContent = "PIN incorreto. Peça ajuda ao Master."; return; } state.streak = 0; state.reward = false; state.history = []; state.cycleStarted = todayKey(); saveState(); $("#pinDialog").close(); refreshDashboard(); showScreen("dashboardScreen"); toast("Prêmio entregue! Um novo ciclo começou."); });

$("#onboardingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const pin = $("#setupPin").value; const confirmation = $("#setupPinConfirm").value;
  if (!/^\d{4}$/.test(pin)) { $("#setupError").textContent = "Crie um PIN com exatamente 4 números."; return; }
  if (pin !== confirmation) { $("#setupError").textContent = "Os dois PINs não são iguais."; return; }
  state = { ...state, name: $("#setupName").value.trim() || "Bia", rewardName: $("#setupReward").value.trim(), pin, masterConfigured: true, cycleStarted: todayKey(), streak: 0, history: [], reward: false, activeSession: null };
  saveState(); $("#onboardingDialog").close(); $("#rewardConfirmation").textContent = state.rewardName; refreshDashboard(); $("#setupSuccessDialog").showModal();
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("service-worker.js?v=4").then((registration) => registration.update());
refreshDashboard(); if (!state.masterConfigured) $("#onboardingDialog").showModal(); else if (state.reward) showReward();
