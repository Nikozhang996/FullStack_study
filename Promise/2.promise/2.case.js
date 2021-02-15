const Promise = require("./2.promise");

let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("6666");
  }, 1000);
});

p.then(
  function (value) {
    console.log("suc:" + value);
  },
  function (reason) {
    console.log("err:" + reason);
  }
);
