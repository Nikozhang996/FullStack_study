const path = require("path");

/* 
let str = 'console.log(a)'
let fn = new Function('a', str)
console.log(fn.toString());
 */
const a = "aaa";
const vm = require("vm");
let str = "console.log(a)";
vm.runInThisContext(str);
