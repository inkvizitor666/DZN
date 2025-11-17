const [, , input] = process.argv;

if (!input) {
  console.error('Использование: node app.js "ваша строка"');
  process.exit(1);
}

const buffer = Buffer.from(input, "utf8");

console.log(`Исходная строка: ${input}`);
console.log(`Размер буфера: ${buffer.length} байт`);
console.log(`UTF-8: ${buffer.toString("utf8")}`);
console.log(`Hex: ${buffer.toString("hex")}`);
console.log(`Base64: ${buffer.toString("base64")}`);
