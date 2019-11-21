const fs = require("fs"),
  path = require("path");

// 同步方法
const resSync = fs.readFileSync(path.join(__dirname, "temp.js"), {
  encoding: "utf-8",
  flag: "r"
});

//  异步方法
let read = null;
fs.readFile(
  path.join(__dirname, "temp.js"),
  {
    encoding: "utf-8",
    flag: "r"
  },
  function(err, data) {
    if (!err) {
      console.log(data);
      read = data;
    }
  }
);
