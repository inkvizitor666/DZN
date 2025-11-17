const bytesToMB = (bytes) => (bytes / 1024 / 1024).toFixed(1);

const memory = process.memoryUsage();

console.log(`PID процесса: ${process.pid}`);
console.log(`Платформа: ${process.platform}`);
console.log(`Архитектура: ${process.arch}`);
console.log(`Время работы: ${process.uptime().toFixed(3)} секунд`);
console.log(`Использование памяти (RSS): ${bytesToMB(memory.rss)} MB`);
console.log(`Использование памяти (Heap Total): ${bytesToMB(memory.heapTotal)} MB`);
console.log(`Использование памяти (Heap Used): ${bytesToMB(memory.heapUsed)} MB`);
