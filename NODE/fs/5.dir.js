let fs = require("fs");
let util = require("util");
let access = util.promisify(fs.access);
let mkdir = util.promisify(fs.mkdir);

// 手动实现一个promisify
function promisify(fn) {
  return function (param) {
    return new Promise((res, rej) => {
      fn(param, (flag) => {
        res(flag);
      });
    });
  };
}

const readFile = promisify(fs.readFile);
