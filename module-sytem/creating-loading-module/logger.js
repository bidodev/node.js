var url = "http://mylogger.io/log";

function log(message) {
  //Send an HTTP request
  console.log(message);
}

//both variable and function are scoped to this module (they're private)

//make it public
//exports: {}

//we export an object with log method inside
//module.exports.log = log;

//we can also export only a function
module.exports = log;
