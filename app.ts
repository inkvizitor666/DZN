import { factorial } from "./factorial.ts";

const compute = (array: number[]): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i);
  }
  return array.map((el) => {
    return factorial(el);
  });
};

const main = () => {
  performance.mark("start");
  const result: number[][] = [
    compute([30, 40, 50, 10, 20, 30]),
    compute([30, 40, 50, 10, 20, 30]),
    compute([30, 40, 50, 10, 20, 30]),
    compute([30, 40, 50, 10, 20, 30]),
  ];
  console.log(result);
  performance.mark("end");
  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main").pop());
};

main();
