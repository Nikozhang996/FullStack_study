const fs = require("fs");
const path = require("path");

function after(count, callback) {
  return function () {
    if (--count === 0) {
      callback();
    }
  };
}

/* 高阶函数，可以接收参数是函数或返回一个函数，返回函数也叫偏函数 */
const fn = after(3, function () {
  console.log("函数被调用了三次");
});
fn();
fn();
// fn();

/* 回调是处理异步最原始的做法，通过回调的方式返回异步结果 */
function timeoutFn(callback) {
  let params = "timeoutFn";
  setTimeout(() => {
    callback(params);
  }, 1000);
}

// 异步函数
timeoutFn((res) => {
  console.log(`回调结果：${res}`);
});
