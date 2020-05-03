const path = require("path");

const pathObj = path.parse(__filename);
console.log(pathObj);

/* output
{
    root: '/',
    dir: '/home/bido/Desktop/node.js/module-sytem',
    base: 'path-module.js',
    ext: '.js',
    name: 'path-module'
  }
*/
