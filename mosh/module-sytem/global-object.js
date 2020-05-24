//on the browser we have window object
console.log();
window.setTimeout();
window.clearTimeout();
window.setInterval();
window.clearInterval();

//on the node we have global object
//we can use
global.setTimeout();
global.clearTimeout();
global.setInterval();
global.clearInterval();

var message = ""; //this is not added to the global object
//the variables added in this file are scoped to this file and not to the global object, therefore not avaiable outside this file.

console.log(global.message); //it will return undefined
