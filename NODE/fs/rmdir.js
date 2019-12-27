const fs = require("fs");
const path = require("path");

// 同步删除文件夹，必须为空文件夹才能删除，递归至树叶节点，删除文件，或删除自身
function removeDirSync(filePath) {
  // 判断目标是否存在，
  const state = fs.statSync(filePath);
  const isDirectory = state.isDirectory();
  console.log(state);

  if (isDirectory) {
    const childrenDirs = fs.readdirSync(filePath);
    // 删除子目录
    childrenDirs
      .map(function(item) {
        return path.resolve(filePath, item);
      })
      .forEach(item => {
        removeDirSync(item);
      });
    // 删除自身
    fs.rmdirSync(filePath);
  } else {
    fs.unlinkSync(filePath);
  }

  return true;
}

function removeDir(filePath, callback) {
  fs.stat(filePath, function(err, targetStatus) {
    if (err) {
      return console.log(err);
    }
    if (targetStatus.isDirectory()) {
      fs.readdir(filePath, function(err, dirs) {
        const childrenDirsPath = dirs.map(function(item) {
          return path.resolve(filePath, item);
        });
        let index = 0;
        function next() {
          if (index === childrenDirsPath.length) {
            console.log(index);
            fs.rmdir(filePath, callback);
            return;
          }
          const currentDirPath = childrenDirsPath[index++];
          removeDir(currentDirPath, function() {
            next();
          });
        }
        next();
      });
    } else {
      fs.unlink(filePath, typeof callback === "function" && callback());
    }
  });
}

// removeDirSync(path.resolve(__dirname, "./c"));

removeDir(path.resolve(__dirname, "./c"), function() {
  console.log("delete success");
});

/**
 * https://gitee.com/jw-speed/201905jiagouke/blob/master/10.fs/2.fs-rmdir.js
 * 1.检查是否存在
 * 2.判断目标是否为文件夹还是文件
 * 3.递归删除
 */
