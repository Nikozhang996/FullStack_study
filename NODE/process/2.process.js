const { spawn } = require("child_process");
const path = require("path");

const cp = spawn("node", ["sum.js"], {
  cwd: path.resolve(__dirname, "./worker"),
  stdio: [0, 1, 2],
  // stdio:'ignore' // 如果填写的是ignore 默认会忽略掉 子进程的输出
  // stdio:[process.stdin,process.stdout,process.stderr]  'inherit'  [0,1,2]// 共享父进程的标注输出 错误输出 以及 标准输入
  // stdio:'pipe'// ['pipe','pipe','pipe'] 默认就是pipe方法
});

cp.stdin &&
  cp.stdin.on("data", function (data) {
    console.log(data.toString(), "---");
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
