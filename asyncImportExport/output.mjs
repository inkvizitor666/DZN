//import char from "./characters.mjs";       Импорт дефолтного экспорта
//import * as char from "./characters.mjs";
//   Импорт всего   обращение тогда будет через точку char.characters и char.greet
//import log, { characters, greet } from "./characters.mjs"; то же самое
//import log, * as char from "./characters.mjs"; но обращаться то же через точку char.characters

//import log, { characters, greet as hello } from "./characters.mjs"; //переопределили название функции  из greet в hello
async function main() {
  try {
    const { characters, greet } = await import("./characters.mjs"); // ассинхронный вызов модуля
    for (const c of characters) {
      greet(c);
    }
  } catch (e) {
    console.log("ERR");
  }
}
main();
