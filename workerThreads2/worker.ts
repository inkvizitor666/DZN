import { factorial } from "./factorial.ts";
import { parentPort, workerData } from "worker_threads";

const compute = (array: number[]): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i);
  }
  return array.map((el) => {
    return factorial(el);
  });
};

parentPort?.postMessage(compute(workerData));
