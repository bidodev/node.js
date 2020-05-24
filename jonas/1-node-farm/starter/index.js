const fs = require("fs");

//reading text from files
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;

//writing file
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written");
