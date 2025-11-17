const path = require("path");

const [, , filePath] = process.argv;

if (!filePath) {
  console.error("Использование: node app.js <путь_к_файлу>");
  process.exit(1);
}

const absolutePath = path.resolve(process.cwd(), filePath);
const dirName = path.dirname(filePath);
const baseName = path.basename(filePath);
const extName = path.extname(filePath);
const baseWithoutExt = path.basename(filePath, extName);

console.log(`Директория: ${dirName}`);
console.log(`Имя файла: ${baseName}`);
console.log(`Расширение: ${extName || "(нет)"}`);
console.log(`Базовое имя: ${baseWithoutExt}`);
console.log(`Абсолютный путь: ${absolutePath}`);
