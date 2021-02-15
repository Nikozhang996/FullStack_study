const fs = require("fs"),
  path = require("path");

function name(params) {
  // 同步方法
  const resSync = fs.readFileSync(path.join(__dirname, "temp.js"), {
    encoding: "utf-8",
    flag: "r",
  });

  //  异步方法
  let read = null;
  fs.readFile(
    path.join(__dirname, "temp.js"),
    {
      encoding: "utf-8",
      flag: "r",
    },
    function (err, data) {
      if (!err) {
        console.log(data);
        read = data;
      }
    }
  );
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let index = 0;
// console.log(arr[index++]);
console.log(arr[++index]);
