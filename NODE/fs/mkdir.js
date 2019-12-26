const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const pathUrl = "c/d/e/f/g";

function mkdirSync(pathUrl) {
  const pathArr = pathUrl.split("/");
  for (let i = 0; i < pathArr.length; i++) {
    const currentPath = pathArr.slice(0, i + 1).join("/"),
      absPath = path.resolve(__dirname, currentPath);

    try {
      fs.accessSync(absPath);
    } catch (error) {
      fs.mkdirSync(absPath);
    }
  }
}

function mkdir(pathUrl, callback) {
  const pathArr = pathUrl.split("/");

  fs.access(path.resolve(__dirname, pathArr[0]), function (err, data) {
    if (err) {
      console.log(path.resolve(__dirname, pathArr[0]));
      console.log("文件夹已存在");
    } else {
      function next(index) {
        // 递归先确定终止条件
        if (pathArr.length === index) return callback();
        const currentPath = pathArr.slice(0, ++index).join("/");
        const absPath = path.resolve(__dirname, currentPath);

        fs.access(currentPath, function (err, data) {
          if (err) {
            fs.mkdir(currentPath, function () {
              next(index);
            });
          } else {
            next(index);
          }
        });
      }

      next(0);
    }
  });
}

mkdir(pathUrl, function () {
  console.log("mkdir success");
});
