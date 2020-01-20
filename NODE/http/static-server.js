/**
 * https://gitee.com/speedly/201905jiagouke/blob/master/12.http/static-server.js
 * resolve,join
 */
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs").promises;
const { createReadStream } = require("fs");
const mime = require("mime");

class Server {
  constructor(config = {}) {
    this.port = config.port || 3000;
    this.cwd = config.cwd || process.cwd();
  }
  async handleRequest(req, res) {
    const { pathname } = url.parse(req.url);
    let filePath = path.join(this.cwd, pathname);

    try {
      const statObject = await fs.stat(filePath);
      if (statObject.isDirectory()) {
        filePath = path.join(filePath, "index.html");
        await fs.access(filePath);
      }
      this.sendFile(req, res, filePath);
    } catch (error) {
      this.sendError(req, res, error);
    }
  }
  sendFile(req, res, filePath) {
    res.setHeader("Content-Type", mime.getType(filePath) + ";charset=utf-8");
    console.log(mime.getType(filePath));
    createReadStream(filePath).pipe(res);
  }
  sendError(req, res, err) {
    console.log(err);
    res.statusCode = 404;
    res.end("Not Found");
  }
  start() {
    const server = http.createServer(this.handleRequest.bind(this));
    server.on("error", function(err) {
      console.log(err);
    });
    server.listen(
      this.port,
      function() {
        console.log(`服务器已运行于：${this.port}`);
      }.bind(this)
    );
  }
}

const server = new Server({ port: 3000 });
// const client = new Server({ port: 3000 });

server.start();
// server.start();
/**
const server = http.createServer(function(req, res) {
  res.end('666666')
});
server.listen(3000);
 */
