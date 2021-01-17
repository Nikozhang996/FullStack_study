const { spawn, fork, execFile, exec } = require("child_process");
const path = require("path");
const http = require("http");
const CPU_CORE_LENGTH = require("os").cpus().length;

const server = http.createServer(function (req, res) {
  res.end(`${process.pid}: mian end`);
});

server.listen(3000);

for (let i = 0; i < CPU_CORE_LENGTH - 1; i++) {
  const cp = fork("server.js", {
    cwd: path.resolve(__dirname, "worker"),
    stdio: [0, 1, 2, "ipc"],
  });

  cp.send(`server`, server);
}
