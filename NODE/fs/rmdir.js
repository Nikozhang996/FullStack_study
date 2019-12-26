const fs = require("fs");
const path = require("path");

// 同步删除文件夹，必须为空文件夹才能删除，递归至树叶节点，删除文件，或删除自身
function rmdirSync(filePath) {
  // 判断目标是否存在，
  const state = fs.statSync(filePath);
  const isDirectory = state.isDirectory();
  if (isDirectory) {
    const childrenDirs = fs.readdirSync(filePath);
    // 删除子目录
    childrenDirs
      .map(function(item) {
        return path.resolve(filePath, item);
      })
      .forEach(item => {
        rmdirSync(item);
      });
    // 删除自身
    fs.rmdirSync(filePath);
  } else {
    fs.unlinkSync(filePath);
  }

  return true;
}

rmdirSync(path.resolve(__dirname, "./c"));
