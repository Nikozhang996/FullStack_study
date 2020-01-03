const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

// 同步串行
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

// 回调异步串行
function removeDirBySeries(filePath, callback) {
  fs.stat(filePath, function(err, targetStatus) {
    if (err) {
      return console.log(err);
    }
    // 如果目标为文件夹则继续递归，为文件则直接删除
    if (targetStatus.isDirectory()) {
      fs.readdir(filePath, function(err, dirs) {
        // 读取当前路径，获取子目录或文件
        const childrenDirsPath = dirs.map(function(item) {
          return path.resolve(filePath, item);
        });
        /**
         * 重点！！！
         * 如果当前路径没有子目录和子文件，则删除当前路径文件夹
         */
        // 建立临时变量保持索引
        let index = 0;
        function next() {
          // 相同则说明当前路径已经清空所有子目录与文件，所以删除自身。
          if (index === childrenDirsPath.length) {
            fs.rmdir(filePath, callback);
            return;
          }
          // 递归调用removeDir，逻辑如上
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

// 回调异步并行paralle
function removeDirByParalle(filePath, callback) {
  fs.stat(filePath, function(err, stat) {
    if (err) {
      return console.log(err);
    }
    if (stat.isDirectory()) {
      fs.readdir(filePath, function(err, dirs) {
        // 如果当前目录没有文件夹，则直接删除自身
        if (dirs.length === 0) {
          return fs.rmdir(filePath, callback);
        }
        // 拼接子目录路径
        const childrenDirsPath = dirs.map(item => {
          return path.resolve(filePath, item);
        });

        // 当前作用域下建立标识
        let index = 0;

        // 遍历子目录，由此开始递归进入
        childrenDirsPath.forEach(function(item) {
          removeDirByParalle(item, function() {
            // 如果儿子删除的个数与儿子数量相同，则说明儿子已经删除完毕，删除自身
            if (++index === childrenDirsPath.length) {
              return fs.rmdir(filePath, callback);
            }
          });
        });
      });
    } else {
      fs.unlink(filePath, callback);
    }
  });
}

// Promise实现异步并发
function removeDirByPromise(filePath) {
  return new Promise(function(resolve, reject) {
    fs.stat(filePath, function(err, state) {
      if (err) return reject(err);
      if (state.isDirectory()) {
        fs.readdir(filePath, function(err, dirs) {
          if (err) return reject(err);
          dirs = dirs.map(function(dir) {
            return removeDirByPromise(path.resolve(filePath, dir));
          });
          Promise.all(dirs).then(function() {
            fs.rmdir(filePath, resolve);
          });
        });
      } else {
        fs.unlink(filePath, resolve);
      }
    });
  });
}

// async异步并行
async function removeDirByAsync(targetPath) {
  const targetStatus = await fsPromise.stat(targetPath);
  if (targetStatus.isDirectory()) {
    const currentDirChilds = await fsPromise.readdir(targetPath);
    // 递归包装为promise
    const currentDirPath = currentDirChilds.map(item => {
      return removeDirByAsync(path.resolve(targetPath, item));
    });
    // 并行处理多个操作，完成后删除自己
    await Promise.all(currentDirPath);
    await fsPromise.rmdir(targetPath);
  } else {
    await fsPromise.unlink(targetPath);
  }
}

// 同步广度

// 异步广度
removeDirByPromise(path.resolve(__dirname, "./c"))
  .then(function() {
    console.log("删除成功");
  })
  .catch(function(err) {
    console.log(err);
  });
/* 
removeDirByAsync(path.resolve(__dirname, "./c"))
  .then(function() {
    console.log("删除成功");
  })
  .catch(function(err) {
    console.log(err);
  });

removeDirByParalle(path.resolve(__dirname, "./c"), function() {
  console.log("删除成功");
});

removeDirByAsync(path.resolve(__dirname, "./c")).then(res => {
  console.log("删除成功");
});

removeDirSync(path.resolve(__dirname, "./c"));

removeDir(path.resolve(__dirname, "./c"), function() {
  console.log("delete success");
});
 */

/**
 * https://gitee.com/jw-speed/201905jiagouke/blob/master/10.fs/2.fs-rmdir.js
 * https://juejin.im/post/5ab32b20518825557f00d36c
 * 必须为空文件夹才能删除，递归至树叶节点，删除文件，或删除自身
 * 1.检查是否存在
 * 2.判断目标是否为文件夹还是文件
 * 3.递归删除
 * 4.序、度
 */
