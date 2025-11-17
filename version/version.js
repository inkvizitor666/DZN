const [, , targetVersion] = process.argv;

if (!targetVersion) {
  console.error("Использование: node app.js <целeвая_версия>");
  process.exit(1);
}

const currentVersion = process.version;

console.log(`Текущая версия Node.js: ${currentVersion}`);
console.log(`Для установки версии ${targetVersion} выполните:`);
console.log(`nvm install ${targetVersion}`);
console.log(`nvm use ${targetVersion}`);

if (currentVersion.replace(/^v/, "") !== targetVersion) {
  console.log(`По желанию можно сделать версию ${targetVersion} дефолтной:`);
  console.log(`nvm alias default ${targetVersion}`);
} else {
  console.log("Вы уже используете указанную версию Node.js.");
}
