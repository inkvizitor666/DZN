fs = require("fs");
const data = fs.readFileSync("./data.txt");
console.log("проба пера");
console.log(data.toString());
