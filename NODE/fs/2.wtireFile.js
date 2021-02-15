const fs = require("fs"),
  path = require("path");

let first = "刘青",
  end = "还是很可爱的！";

// 写一个文件
fs.writeFile(path.join(__dirname, "temp.js"), first, (err) => {
  console.log("成功！");
});

// 在文件尾部追加
fs.appendFile(path.join(__dirname, "temp.js"), end, (err) => {
  console.log("成功！");
});

// 复制一份文件
console.log(fs.copyFile);
