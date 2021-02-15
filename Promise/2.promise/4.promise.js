function Promise(executor) {
  const _this = this;
  // 保存成功的值或失败的原因
  _this.value = undefined;
  _this.reason = undefined;
  // 专门存成功的回调
  _this.onResolvedCallbacks = [];
  // 专门存失败的回调
  _this.onRejectedCallbacks = [];
  // 保存当前Promise的状态（Promise有三个状态，pending,resolve,reject）
  _this.status = "pending";
  // 成功时的执行器
  function resolve(value) {
    if (_this.status === "pending") {
      _this.value = value;
      _this.status = "resolved";
      _this.onResolvedCallbacks.forEach(function (func) {
        func();
      });
    }
  }
  // 失败的时的执行器
  function reject(reason) {
    if (_this.status === "pending") {
      _this.reason = reason;
      _this.status = "rejected";
      _this.onRejectedCallbacks.forEach(function (func) {
        func();
      });
    }
  }
  // 执行器立即执行，如果运行时发生错误则直接走reject
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
// 解析链式调用的 （他还要和其他的promise进行结合）
function resolvePromise(x, promise2, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError("循环引用"));
  }
  // 如果x是一个函数，或是一个对象，则有可能是promise
  if (x !== null && (typeof x === "function" || typeof x === "object")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          function (y) {
            resolve(y);
          },
          function (r) {
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      reject(error);
    }
  } else {
    // 如果是一个普通值，则直接返回resolve
    resolve(x);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  const _this = this;
  /**
   * 需要把then中成功或失败的结果获取到
   * 看看是不是promise，如果是promise则让其执行，获取执行后的结果，返回成功或失败的结果
   * 如果x是普通值就让返回的promise变成成功态
   */
  let promise2 = new Promise(function (resolve, reject) {
    if (_this.status === "resolved") {
      let x = onFulfilled(_this.value);
      resolvePromise(x, promise2, resolve, reject);
    }
    if (_this.status === "rejected") {
      let x = onRejected(_this.reason);
      resolvePromise(x, promise2, resolve, reject);
    }
    // 如果executor中的异步操作，此时调用
    if (_this.status === "pending") {
      _this.onResolvedCallbacks.push(function () {
        let x = onFulfilled(_this.value);
        resolvePromise(x, promise2, resolve, reject);
      });
      _this.onRejectedCallbacks.push(function () {
        let x = onRejected(_this.reason);
        resolvePromise(x, promise2, resolve, reject);
      });
    }
  });
  return promise2;
};
module.exports = Promise;

/**
 * 2、在原有的基础上，处理了异步的情况
 * 3、添加了链式调用功能
 */
