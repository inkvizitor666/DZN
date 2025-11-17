const fs = require("fs");
const path = require("path");

const modulePath = path.join(__dirname, "math-utils.js");

const moduleSource = `function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Нельзя делить на ноль");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
`;

fs.writeFileSync(modulePath, moduleSource);
console.log("Модуль создан:", path.basename(modulePath));

const mathUtils = require("./math-utils");
console.log("Импорт выполнен успешно");

console.log(`Сумма 5 + 3 = ${mathUtils.add(5, 3)}`);
console.log(`Произведение 4 * 6 = ${mathUtils.multiply(4, 6)}`);
console.log("Тестирование дополнительных функций:");
console.log(`Разность 10 - 4 = ${mathUtils.subtract(10, 4)}`);
console.log(`Частное 15 / 3 = ${mathUtils.divide(15, 3)}`);
