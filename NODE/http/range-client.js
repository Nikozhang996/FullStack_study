const http = require("http");
const fs = require("fs");
const path = require("path");

const opts = {
  host: "localhost",
  port: 3000,
  headers: {}
};

let start = 0; // 起初值
let pause = false; // 暂停

function download() {
  opts.headers.Range = `bytes=${start}-${start + 3}`;
  start += 4;
  const client = http.request(opts, function(res) {
    let total = res.headers["content-range"].split("/")[1];
    res.on("data", data => {
      fs.appendFileSync("./download.txt", data);
    });
    res.on("end", function() {
      setTimeout(() => {
        if (!pause && start < total) {
          download();
        }
      }, 1000);
    });
  });

  client.end();
}

download();
