import { error } from "console";
import { Worker } from "worker_threads";

const compute = (array: number[]): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.ts", {
      workerData: array,
    });
    worker.on("message", (msg: number[]) => {
      console.log(worker.threadId);
      resolve(msg);
    });
    worker.on("error", (err: string) => {
      reject(err);
    });
    worker.on("exit", () => {
      console.log("END WORK");
    });
  });
};

const main = async () => {
  try {
    performance.mark("start");
    const result: number[][] = await Promise.all([
      compute([30, 40, 50, 10, 20, 30]),
      compute([30, 40, 50, 10, 20, 30]),
      compute([30, 40, 50, 10, 20, 30]),
      compute([30, 40, 50, 10, 20, 30]),
    ]);
    console.log(result);
    performance.mark("end");
    performance.measure("main", "start", "end");
    console.log(performance.getEntriesByName("main").pop());
  } catch (e: string | any) {
    console.log(error(e.message));
  }
};

main();
