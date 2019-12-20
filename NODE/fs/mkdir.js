const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const pathUrl = "c/d/e/f/g";
// 同步创建
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
// 异步创建
function mkdir(pathUrl, callback) {
  // 分割路径
  const pathArr = pathUrl.split("/");
  console.log(path.resolve(__dirname, pathArr[0]));
  // 首先判断该目录是否存在，不存在则创建
  fs.access(path.resolve(__dirname, pathArr[0]), function(err, data) {
    if (err) {
      console.log("文件夹已存在");
    } else {
      // 递归创建指定目录文件夹
      function next(index) {
        // 递归先确定终止条件
        if (pathArr.length === index) return callback();
        const currentPath = pathArr.slice(0, ++index).join("/");
        const absPath = path.resolve(__dirname, currentPath);

        fs.access(currentPath, function(err, data) {1
          if (err) {
            fs.mkdir(currentPath, function() {
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

mkdir(pathUrl, function() {
  console.log("mkdir success");
});
