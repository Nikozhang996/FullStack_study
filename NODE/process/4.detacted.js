const { spawn } = require("child_process");
const path = require("path");

const cp = spawn("node", ["write.js", "a", "b"], {
  cwd: path.resolve(__dirname, "./worker"),
  detached: true,
  stdio: "ignore",
});

cp.unref();

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
