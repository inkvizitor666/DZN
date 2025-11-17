const EventEmitter = require("events");
const myEmitter = new EventEmitter();

const logDbConnection = () => {
  console.log("DB connected");
};

myEmitter.addListener("connected", logDbConnection); //создание
myEmitter.emit("connected"); //вывод
myEmitter.off("connected", logDbConnection); //отключение от события
myEmitter.on("connected", logDbConnection); //подключение к событию
myEmitter.removeListener("connected", logDbConnection); //удаление    // либо удалить все листенеры   myEmitter.removeAllListeners('connected');
/* выводится только один раз затем удаляется */ myEmitter.once("onecConnected", () => {
  console.log("единоразовый вывод... больше не будет");
});

myEmitter.emit("onecConnected");

myEmitter.on("msg", (data) => {
  console.log(`Получил: ${data}`);
});
myEmitter.prependListener("msg", (data) => {
  console.log("Prepend");
}); //то же самое что myEmitter.on но добавляет в начало списка и выводится первым
myEmitter.emit("msg", "message");

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1); // число лисенеров по умолчанию 10
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount("msg")); //вывод колличество лисенеров msg
console.log(myEmitter.listenerCount("connected")); //вывод колличество лисенеров connected

console.log(myEmitter.listeners("msg")); // вывод самих лисенеров
console.log(myEmitter.eventNames()); //вывод самих эвентов

myEmitter.on("error", (err) => {
  console.log("произошла ошибка:  " + err.message);
}); //обработка события  ошибки
myEmitter.emit("error", new Error("BOOOOM!!!!")); //обработка ошибки

const target = new EventTarget();

const logTarget = () => {
  console.log("Connected to target");
}; //создание события
target.addEventListener("connected", logTarget); // обработка события

target.dispatchEvent(new Event("connected")); // вызов события





//####################################DZ########################################
const { EventEmitter } = require("events");

const emitter = new EventEmitter();

// Регистрация слушателей
emitter.on("message", (text) => {
  console.log("Получено сообщение:", text);
});

emitter.once("init", (info) => {
  console.log("Одноразовый слушатель сработал:", info);
});

emitter.on("payload", (data) => {
  console.log("Слушатель запущен с данными:", data);
});

emitter.once("special", (data) => {
  console.log("Одноразовый обработчик:", data);
});

emitter.on("regular", (data) => {
  console.log("Обычный слушатель:", data);
});

// Генерация событий
emitter.emit("message", "Привет от события!");
emitter.emit("init", "Первый запуск");
emitter.emit("message", "Второе сообщение");
emitter.emit("payload", "test data");
emitter.emit("special", "special event");
emitter.emit("regular", "regular event");
