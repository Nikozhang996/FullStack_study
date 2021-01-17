const { spawn, fork, execFile, exec } = require("child_process");
const path = require("path");

const cp = exec(
  "path",
  {
    cwd: path.resolve(__dirname, "worker"),
  },
  function (err, stdout, stderr) {
    console.log(stdout);
  }
);

// 父子间的通信
cp.on("error", function (err) {
  console.log(err);
});
cp.on("close", function () {
  console.log("子进程关闭了");
});
cp.on("exit", function () {
  console.log("子进程退出");
});
