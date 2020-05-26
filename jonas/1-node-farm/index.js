const fs = require('fs');
const http = require('http');
const url = require('url');
const replace = require('./modules/replace');
const slugify = require('slugify');

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

//top level code..
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const parsed = JSON.parse(data);

//const slugs = parsed.map((el) => slugify(el.productName, { lower: true }));

//SERVER
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });

    const cards = parsed.map((element) => replace(tempCard, element)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cards);
    res.end(output);
  }

  //product page
  else if (pathname === '/product') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    const product = parsed[query.id];
    const output = replace(tempProduct, product);

    res.end(output);
  }

  //this is the api
  else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(data);
  }

  //404
  else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening to requests on port 3000');
});
