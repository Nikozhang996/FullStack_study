/**
 * https://gitee.com/speedly/201905jiagouke/blob/master/12.http/static-server.js
 */
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const mime = require("mime");

class Server {
  constructor(config = {}) {
    this.port = config.port || 3000;
    this.port = config.cwd || process.cwd();
  }
  async handleRequest(req, res) {
    // console.log(req);
    // console.log(res);
  }
  sendFile(req, res, filePath) {}
  sendError(req, res, err) {
    console.log(err);
    res.statusCode = 404;
    res.end("Not Found");
  }
  start() {
    console.log(this);

    const server = http.createServer(this.handleRequest.bind(this));
    server.on("error", function(err) {
      console.log(err);
    });
    server.listen(this.port, function() {
      console.log(`服务器已运行于：${this.port}`);
    });
  }
}

const server = new Server();
// const client = new Server({ port: 3000 });

server.start();
// server.start();
/**
const server = http.createServer(function(req, res) {
  res.end('666666')
});
server.listen(3000);
 */
