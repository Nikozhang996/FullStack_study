const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  // console.log(req.headers);
  // console.log(req.method);
  // console.log(req.url);

  let arr = [];

  req.on("data", (data) => {
    console.log(data);
    arr.push(data);
  });

  req.on("end", (params) => {
    let temp = Buffer.concat(arr).toString("utf-8");

    const ContentType = req.headers["content-type"];

    if (ContentType === "x-www-form-urlencoded") {
      let r = querystring.parse(temp);
      console.log(r);
    } else if (ContentType === "application/json") {
      console.log(JSON.parse(temp));
    } else {
      console.log(temp);
    }
  });

  res.end("我死了"); // 结束了
});

server.listen(3000);
