// file system

const fs = require("fs");
console.log("start");
const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");

// console.log(first);
// console.log(second);
fs.writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);
console.log("Done with this task");
console.log("starting the next one");
