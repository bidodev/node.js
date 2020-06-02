const fs = require("fs");

setTimeout(() => {
  console.log("Timer one finished");
}, 0);

setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("text-file.txt", () => {
  console.log("I/O finished");
});

console.log("Hello from the top level code..");
