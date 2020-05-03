//https://nodejs.org/api/fs.html
const fs = require("fs");

//all methods come with sync and async methods, always preffer to use async methods.

fs.readdir("./", (err, files) => {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
