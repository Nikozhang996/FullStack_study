/* 
    加密算法：MD5
    摘要算法:不可逆 相同的内容加密出来的结果永远一样, 加密后的结果长度一致的，不同的内容摘要出来的结果永远不一样
 */
const crypto = require("crypto");

function toMD5(val) {
  return crypto.createHash("md5").update(String(val)).digest("base64");
}

console.log(toMD5(123456));
console.log(toMD5("刘青还是很可爱的"));
