const start = Date.now();

const elapsed = () => `${Date.now() - start} мс`;
const completed = {
  immediate: false,
  timeout: false,
  interval: false,
};

const checkCompletion = () => {
  if (completed.immediate && completed.timeout && completed.interval) {
    console.log(`[${elapsed()}] Все таймеры завершены`);
  }
};

console.log("Демонстрация таймеров Node.js");

setImmediate(() => {
  console.log(`[${elapsed()}] setImmediate выполнен`);
  completed.immediate = true;
  checkCompletion();
});

setTimeout(() => {
  console.log(`[${elapsed()}] setTimeout (100 мс) выполнен`);
  completed.timeout = true;
  checkCompletion();
}, 100);

let intervalCount = 0;
const intervalId = setInterval(() => {
  intervalCount += 1;
  console.log(`[${elapsed()}] setInterval выполнение #${intervalCount}`);

  if (intervalCount === 3) {
    clearInterval(intervalId);
    completed.interval = true;
    checkCompletion();
  }
}, 150);
