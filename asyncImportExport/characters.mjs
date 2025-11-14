export let characters = ["Frodo", "Gendalf", "Oragorn"];

export function greet(character) {
  console.log("ПОЗДРАВЛЯЕМ! " + character + "...   Кольцо ликвидировали!");
}

//Импорт дефолтного экспорта
export default function log() {
  console.log("log");
}
