console.log("Симуляция REPL сессии:");

const transcript = [
  { command: "2 + 3", result: 2 + 3 },
  { command: "Math.sqrt(16)", result: Math.sqrt(16) },
  { command: "console.log('Hello REPL')", result: (() => {
      console.log("Hello REPL");
      return "undefined";
    })()
  },
  { command: "process.version", result: process.version },
];

transcript.forEach(({ command, result }) => {
  console.log(`> ${command}`);
  // result может быть строкой "undefined", числом или другим значением
  if (typeof result === "string" && result === "undefined") {
    console.log("undefined");
  } else {
    console.log(result);
  }
});

console.log("> .exit");
console.log("Выход из REPL");