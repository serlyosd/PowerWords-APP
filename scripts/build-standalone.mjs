import fs from "node:fs";

let html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const words = fs.readFileSync("words.js", "utf8");
const app = fs.readFileSync("app.js", "utf8");

html = html
  .replace('    <link rel="manifest" href="manifest.webmanifest" />\n', "")
  .replace(/    <link rel="stylesheet" href="styles\.css[^\"]*" \/>/, `    <style>\n${css}\n    </style>`)
  .replace(/    <script src="words\.js[^\"]*"><\/script>\n    <script src="app\.js[^\"]*"><\/script>/, `    <script>\n${words}\n    </script>\n    <script>\n${app}\n    </script>`);

fs.writeFileSync("Lumina.html", html);
console.log("Lumina.html gerado com sucesso.");
