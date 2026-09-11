import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const wordsSource = fs.readFileSync(new URL("../words.js", import.meta.url), "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${wordsSource};globalThis.words = LUMINA_WORDS;`, context);

assert.equal(context.words.length, 300, "o banco deve conter 300 palavras");
assert.equal(new Set(context.words.map(({ word }) => word)).size, 300, "as palavras devem ser únicas");
assert.ok(context.words.every(({ word, definition, example, synonyms, antonyms }) => word && definition && example && synonyms && antonyms), "todas as cartas devem conter conceito, exemplo, sinônimos e antônimos");
assert.ok(context.words.every(({ example }) => !example.includes("usou “")), "as frases devem mostrar a palavra em uso, sem o antigo texto genérico");
assert.ok(context.words.every(({ word, example }) => example.toLocaleLowerCase("pt-BR").includes(word.toLocaleLowerCase("pt-BR"))), "cada frase deve conter explicitamente a palavra estudada");
assert.equal(context.words.find(({ word }) => word === "Cético").example, "Ele permaneceu cético diante daquela explicação.");

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
for (const id of ["dashboardScreen", "studyScreen", "resultScreen", "rewardScreen", "pinDialog", "onboardingDialog", "setupSuccessDialog", "resetDialog", "masterAreaButton", "example", "antonyms"]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `a interface deve conter ${id}`);
}

const app = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
assert.match(app, /const SESSION_SIZE = 21;/, "a sessão deve usar exatamente 21 cartas");
assert.match(app, /const SUCCESS_TARGET = 17;/, "a meta de 80% deve equivaler a 17 cartas");
assert.match(app, /masterConfigured: false/, "o primeiro acesso deve exigir configuração do Master");

console.log("Smoke test aprovado: 300 palavras, 21 cartas e fluxos essenciais presentes.");
