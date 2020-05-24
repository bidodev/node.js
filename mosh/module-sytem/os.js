//list of methods: https://nodejs.org/api/os.html
const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

//print the total of memory in the System
console.log(`Your computer has a totalMemory of ${totalMemory}`);
