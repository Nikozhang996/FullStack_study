const http = require("http");

const opts = {
  host: "localhost",
  port: 3000,
  path: "/hello",
  headers: {
    a: 1,
    "Content-Type": "x-www-form-urlencoded",
    "Content-Length": 3
  }
};

const client = http.request(opts, res => {
  res.on("data", data => {
    console.log(`服务器返回${data.toString()}`);
  });
});

client.end("a=1"); // 发送请求
