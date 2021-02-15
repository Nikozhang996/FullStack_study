const Promise = require("./1.promise");

let p = new Promise(function (resolve, reject) {
  resolve("6666");
});

p.then(
  function (value) {
    console.log("suc:" + value);
  },
  function (reason) {
    console.log("err:" + reason);
  }
);
p.then(
  function (value) {
    console.log("suc:" + value);
  },
  function (reason) {
    console.log("err:" + reason);
  }
);
