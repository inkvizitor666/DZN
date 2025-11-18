/* const start = performance.now();
setTimeout(() => {
  console.log(performance.now() - start);
  console.log("Прошла секнда");
}, 1000); */
//########################################################################
/* function myFunc(arg, arg2) {
  console.log("Аргумент=>" + arg + " " + arg2);
}
setTimeout(myFunc, 1500, "tomato", "bylba"); */
//########################################################################
/* const timerId = setTimeout(() => {
  console.log("BOOOM!");
}, 1000);
setTimeout(() => {
  clearTimeout(timerId);
  console.log("IS CLEAR!");
}, 1000); */
//########################################################################
/* const intervalId = setInterval(() => {
  console.log(performance.now());
}, 1000);

setTimeout(() => {
  clearTimeout(intervalId);
  console.log("IS CLEAR!");
}, 5000); */
//########################################################################
/* console.log("Перед");
setImmediate(() => {
  console.log("После всего");
});
console.log("После"); */
//########################################################################
/* const timerId = setTimeout(() => {
  console.log("BOOOM!");
}, 1000);
timerId.unref(); //убирает ссылку на таймер и приложение не ждёт выполнение таймера (ref возвращает) */
//########################################################################
const timerId2 = setTimeout(() => {
  console.log("BOOOM!");
}, 1000);
timerId2.unref();

setImmediate(() => {
  timerId2.ref();
});
