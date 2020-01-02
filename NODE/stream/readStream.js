const fs = require("fs");
const path = require("path");
const rs = new fs.ReadStream(path.resolve(__dirname, "./a.txt"), {
  enccoding: "utf8",
  start: 0,
  highWaterMark: 2
});

let data = "";

rs.on("error", function(error) {
  console.log(error);
});
rs.on("open", function(fd) {
  // console.log(fd);
});
rs.on("data", function(buffer) {
  // 默认读取的data为buffer
  if (data.length === 3) {
    rs.pause();
  }
  data += buffer.toString();

  console.log(data.toString());
});
rs.on("end", function(fd) {
  console.log("read end");
});

