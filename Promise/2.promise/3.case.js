const Promise = require("./3.promise");

let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

p.then(
  function (value) {
    console.log("suc:" + value);
    return value ** 2;
  },
  function (reason) {
    console.log("err:" + reason);
  }
);
// .then(
//   function (value) {
//     console.log('suc:' + value);
//   },
//   function (reason) {
//     console.log('err:' + reason);
//   });
