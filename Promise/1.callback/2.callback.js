const fs = require("fs");
const path = require("path");

// 异步回调会发生嵌套问题，如果下一个异步执行必须依赖上一个执行结果的话，并且不方便处理错误
fs.readFile(
  path.join(`${__dirname}/data/name.txt`),
  "utf-8",
  function (err, data) {
    fs.readFile(
      path.join(`${__dirname}/data/${data}`),
      "utf-8",
      function (err, data) {
        fs.readFile(
          path.join(`${__dirname}/data/${data}`),
          "utf-8",
          function (err, data) {
            // console.log(data);
          }
        );
      }
    );
  }
);

// 多个异步同时银行， 结果后拿最终的结果。
let school = {};

function after(times, callback) {
  return function () {
    if (--times === 0) {
      callback(school);
    }
  };
}
let out = after(3, function (data) {
  console.log(data);
});

fs.readFile(
  path.join(`${__dirname}/data/name.txt`),
  "utf-8",
  function (err, data) {
    school.name = data;
    out();
  }
);
fs.readFile(
  path.join(`${__dirname}/data/age.txt`),
  "utf-8",
  function (err, data) {
    school.age = data;
    out();
  }
);
fs.readFile(
  path.join(`${__dirname}/data/address.txt`),
  "utf-8",
  function (err, data) {
    school.address = data;
    out();
  }
);
