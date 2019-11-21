const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const pathUrl = "c/d/e/f/g";

function mkdirSync(pathUrl) {
  const pathArr = pathUrl.split("/");
  for (let i = 0; i < pathArr.length; i++) {
    const currentPath = pathArr.slice(0, i + 1).join("/"),
      absPath = path.resolve(__dirname, currentPath);

    try {
      fs.accessSync(absPath);
    } catch (error) {
      fs.mkdirSync(absPath);
    }
  }
}

mkdirSync(pathUrl);
