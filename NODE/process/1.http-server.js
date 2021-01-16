const http = require("http");

http
  .createServer(function (req, res) {
    if (req.url === "/sum") {
      let total = 0;
      for (let i = 0; i < 100 * 10000*1000; i++) {
        total += i;
      }
      res.end(`total:${total}`);
    } else {
      res.end(`other`);
    }
  })
  .listen(3000);
