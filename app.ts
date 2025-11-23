import { exec } from "child_process";

const childProcess = exec("dir", (err, stdout, stderr) => {
  if (err) {
    console.log(err.message);
  }
  console.log("stdout: " + stdout);
  console.log("stdout: " + stderr);
});
