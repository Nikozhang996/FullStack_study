/*
 * https://gitee.com/jw-speed/201905jiagouke/blob/master/13.http/2.http.md
 * */
const http = require("http");
const zlib = require("zlib");
//跨域
/*const server = http.createServer(function (req,res) {
  res.setHeader('Access-Control-Allow-Origin', ' http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,cors-c,Accept,Authorization,cors-b');
  res.setHeader('Access-Control-Max-Age', '1000');
  res.setHeader('Access-Control-Allow-Credentials', false);

  console.log(req.url,req.method);
  res.end(JSON.stringify({name: 'zjk', age: 20}));
});*/

const server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', ' http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,cors-c,Accept,Authorization,cors-b');
  res.setHeader('Access-Control-Max-Age', '1000');
  res.setHeader('Access-Control-Allow-Credentials', false);

  let data = Buffer.from('{name: "zjk", age: 20}');
  res.end(
    JSON.stringify(
      zlib.unzip(data, function(err, data) {
        console.log(err);
        console.log(data);
      })
    )
  );
});

server.listen(4000, function() {
  // console.log('this');
});
