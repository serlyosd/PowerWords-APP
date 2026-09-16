import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const wordsSource = fs.readFileSync(new URL("../words.js", import.meta.url), "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${wordsSource};globalThis.words = LUMINA_WORDS;`, context);

assert.equal(context.words.length, 300, "o banco deve conter 300 palavras");
assert.equal(new Set(context.words.map(({ word }) => word)).size, 300, "as palavras devem ser únicas");
assert.ok(context.words.every(({ word, definition, example, example2, synonyms, antonyms }) => word && definition && example && example2 && synonyms && antonyms), "todas as cartas devem conter conceito, dois exemplos, sinônimos e antônimos");
assert.ok(context.words.every(({ example }) => !example.includes("usou “")), "as frases devem mostrar a palavra em uso, sem o antigo texto genérico");
assert.ok(context.words.every(({ word, example }) => example.toLocaleLowerCase("pt-BR").includes(word.toLocaleLowerCase("pt-BR"))), "cada frase deve conter explicitamente a palavra estudada");
assert.ok(context.words.every(({ word, example2 }) => example2.toLocaleLowerCase("pt-BR").includes(word.toLocaleLowerCase("pt-BR"))), "a segunda frase também deve conter a palavra estudada");
assert.ok(context.words.every(({ example, example2 }) => example !== example2), "as duas frases de cada carta devem ser diferentes");
assert.ok(context.words.every(({ example, example2 }) => !example.toLowerCase().includes("personagem") && !example2.toLowerCase().includes("personagem")), "os exemplos não devem repetir o antigo padrão de personagem");
assert.equal(context.words.find(({ word }) => word === "Cético").example, "Ele permaneceu cético diante daquela explicação.");

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
for (const id of ["dashboardScreen", "studyScreen", "summaryScreen", "quizScreen", "resultScreen", "rewardScreen", "pinDialog", "onboardingDialog", "setupSuccessDialog", "resetDialog", "masterAreaButton", "updateButton", "confirmCard", "previousCard", "nextCard", "summaryList", "quizOptions", "example2", "antonyms"]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `a interface deve conter ${id}`);
}

const app = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
assert.match(app, /const SESSION_SIZE = 21;/, "a sessão deve usar exatamente 21 cartas");
assert.match(app, /const SUCCESS_TARGET = 15;/, "a meta de 70% deve equivaler a 15 respostas corretas");
assert.match(app, /masterConfigured: false/, "o primeiro acesso deve exigir configuração do Master");
assert.match(app, /const APP_VERSION = "1\.3\.0";/, "o aplicativo deve declarar sua versão atual");
assert.match(app, /service-worker\.js\?v=6/, "o registro deve forçar a verificação da versão atual do service worker");
assert.match(app, /O Quiz só pode ser respondido uma vez hoje/, "o início do Quiz deve avisar que existe uma única tentativa diária");
assert.match(app, /addEventListener\("touchend"/, "os cards devem aceitar navegação por gesto no celular");
assert.match(app, /speak\(2\)/, "o verso deve pronunciar a palavra duas vezes");
assert.doesNotMatch(app, /setTimeout\(speakCurrentWord/, "a frente do card não deve iniciar áudio automático");
assert.match(app, /registration\.unregister\(\)/, "a atualização manual deve remover o service worker anterior");

const serviceWorker = fs.readFileSync(new URL("../service-worker.js", import.meta.url), "utf8");
assert.match(serviceWorker, /fetch\(event\.request, \{ cache: "no-store" \}\)/, "o aplicativo deve consultar a rede antes de usar o cache offline");
assert.match(serviceWorker, /cache: "no-store"/, "a consulta de atualização não deve reutilizar o cache HTTP do navegador");
assert.match(serviceWorker, /self\.skipWaiting\(\)/, "uma atualização deve ser ativada sem aguardar o fechamento das abas");

console.log("Smoke test aprovado: 300 palavras, 21 cartas e fluxos essenciais presentes.");
