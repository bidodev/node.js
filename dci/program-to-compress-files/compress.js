const fs = require("fs");
const zlib = require("zlib");

const compress = origin => {
  if (!origin) {
    console.log("Please tell me where is located your file name..");
  } else {
    //check if the file exists using asynchronours way
    fs.access(origin, fs.F_OK, err => {
      if (err) {
        console.error(err.message);
        return;
      }

      const readStream = fs.createReadStream(`${__dirname}/${origin}`);
      readStream
        .pipe(zlib.createGzip())
        .on("data", () => process.stdout.write("."))
        .pipe(fs.createWriteStream(origin + ".gz"))
        .on("finish", () => console.log(`File Compressed`));
    });
  }
};

module.exports = compress;
