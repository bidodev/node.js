const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  if (err) throw err;
  console.log(`Breed: ${data}`);

  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
    if (err) throw err;
    console.log(res.body.message);

    fs.writeFile(`dog-img.txt`, res.body.message, (err) => {
      console.log('Image saved..');
    });
  });
});
