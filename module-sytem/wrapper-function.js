console.log(__filename);
console.log(__dirname);

var url = "http://mylogger.io/log";

function log(message) {
  //Send an HTTP request
  console.log(message);
}

//we can also export only a function
module.exports = log;
