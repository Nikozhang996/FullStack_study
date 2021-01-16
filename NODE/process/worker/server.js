const http = require("http");

process.on("message", function (data, server) {
  http
    .createServer(function (req, res) {
      res.end(`${process.pid}:end`);
    })
    .listen(server);
});
