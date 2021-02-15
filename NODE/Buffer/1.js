/**
 * https://www.cnblogs.com/it-deepinmind/p/7430025.html
 * https://gitee.com/jw-speed/201905jiagouke/blob/master/9.encoding/1.encoding.js
 */
const fs = require("fs");
const path = require("path");

// 十进制转二进制
const num = (123).toString(2);
const str = "张".charCodeAt().toString(2);

function stringToBinary(value) {
  return value.split("").map((item) => {
    return item.charCodeAt().toString(2);
  });
}

function binaryToString(value) {
  return (Array.isArray(value) ? value : [value]).map((item) => {
    return String.fromCharCode(parseInt(item, 2));
  });
}

// console.log(str);
// buffer存储为16进制
console.log(Buffer.from("物是人非").toString("base64"));
console.log(0xe5, (0xe5).toString(2));
console.log(0xbc, (0xbc).toString(2));
console.log(0xa0, (0xa0).toString(2));
