const fs = require("fs");

const [, , filePath] = process.argv;

if (!filePath) {
  console.error("Использование: node app.js <путь_к_файлу>");
  process.exit(1);
}

try {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split(/\r?\n/);
  const lineCount = content === "" ? 0 : lines.length;
  const preview = content.slice(0, 50);

  console.log(`Файл содержит: ${lineCount} строк`);
  console.log(`Первые 50 символов: ${preview}`);
} catch (error) {
  console.error("Ошибка чтения файла:", error.message);
  process.exit(1);
}
