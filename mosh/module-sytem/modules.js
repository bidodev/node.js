//inside the browser
var sayHello = function () {
  //do something
};
//this function will be added to the global scope and be avaiable in the window object.
//window.sayHello();

//to build maintable application we should avoid to declare functions in the global scope.

//modularity
//every file in a node application is considered a module.
//variables and functions are scoped to that module.(they're private)
//if you want to use outside you have to export.

console.log(module);
