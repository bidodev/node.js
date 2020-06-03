const compress = require("./compress");
const showHelp = require("./help.js");

const args = process.argv.slice(2);
const origin = args[0];

//calling the function to compress the origin file
//I made a small changes to allow the user to specify the name of the file.
origin.includes("--help") ? showHelp() : compress(origin);

//usage
//node index (namefile)
//node index (pathfile)
