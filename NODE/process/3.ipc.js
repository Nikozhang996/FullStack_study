const { spawn, fork } = require("child_process");
const path = require("path");

// fork默认使用node命令，但同时也就不能使用其他命令
const cp = fork("sum.js", {
  cwd: path.resolve(__dirname, "./worker"),
  stdio: [0, 1, 2, "ipc"],
});

// 可以通过 on('message') 和 send方法来通信
cp.send("hello i am father");
cp.on("message", function (data) {
  console.log(`father：${data}`);
  cp.kill(); //杀死子进程
});

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
