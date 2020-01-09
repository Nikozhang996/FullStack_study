const fs = require("fs");
const path = require("path");

const ReadStream = require("./SelfReadStream");

const rs = new fs.ReadStream(path.resolve(__dirname, "./a.txt"), {
  enccoding: "utf8",
  start: 0,
  highWaterMark: 2
});

// 文件中才有open,close

let data = [];

rs.on("error", function(error) {
  console.log(error);
});
rs.on("open", function(fd) {
  console.log(fd);
});
rs.on("data", function(buffer) {
  data.push(buffer);
});
rs.on("end", function(fd) {
  console.log(Buffer.concat(data).toString());
});
