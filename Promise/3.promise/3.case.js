const Promise = require("./3.promise");

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 500);
});

p.then(function (data) {
  console.log(data);
  return data ** 2;
  // return new Promise(function (resolve, reject) {
  //   resolve(1000);
  // })
}).then((data) => {
  console.log(data);
});
