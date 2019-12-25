const fs = require("fs");
const path = require("path");

// 同步删除文件夹
function rmdirSync(filePath) {
  // 判断目标是否存在，
  const state = fs.statSync(filePath);
  const isDirectory = state.isDirectory();
  if (isDirectory) {
    const childrenDirs = fs.readdirSync(filePath);
    const childrenDirsPath = childrenDirs.map(function(item) {
      return path.resolve(filePath, item);
    });
    console.log(childrenDirsPath);
  } else {
    fs.unlinkSync(filePath);
  }
}

rmdirSync(path.resolve(__dirname, "./c"));
