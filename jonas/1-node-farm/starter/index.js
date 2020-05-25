const fs = require("fs");
const http = require("http");
const url = require("url");

/////SYNC (blocking code)
//reading text from files
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;

// //writing file
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

///ASYNC (no-blocking code)
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, err => {
//         console.log("Your file has been written");
//       });
//     });
//   });
// });

//SERVER
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/overview") {
    res.end("This is the overview..");
  } else if (url === "/product") {
    res.end("This is the product");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to requests on port 3000");
});
