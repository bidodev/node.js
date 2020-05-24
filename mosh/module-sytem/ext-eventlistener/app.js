const eventEmitter = require("events");

const Logger = require("./logger");
//create a instance of Logger class.
const logger = new Logger();

//register a listerner
logger.on("messageLogged", arg => {
  console.log("Listener called", arg);
});

logger.log("message");
