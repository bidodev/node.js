const fs = require('fs');
const superagent = require('superagent');

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(' I could not find that file..');
      resolve(data);
    });
  });
};

const data = readFile(`${__dirname}/dog.txt`);

data
  .then((breed) => {
    return superagent.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  })
  .then((res) => {
    //2. write to file
    fs.writeFile(`dog-img.txt`, res.body.message, (err) => {
      console.log('Image saved..');
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//
