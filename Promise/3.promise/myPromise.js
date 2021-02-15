function Promise(executor) {
  const self = this;
  // 初始化Promise默认值
  selv.value = undefined;
  selv.reason = undefined;
  // 初始化Promise状态
  self.status = "pending";
  // 存储成功和失败的回调
  self.onResolevdCallbacks = [];
  self.onRejectedCallbacks = [];

  // 成功回调
  function resolve(value) {
    if (self.status === "pending") {
      self.value = value;
      self.status = "resolved";
      self.onResolevdCallbacks.forEach((func) => {
        func();
      });
    }
  }
  // 失败回调
  function reject(reason) {
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
      self.onRejectedCallbacks.forEach((func) => {
        func();
      });
    }
  }
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(eror);
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 如果x.then()中直接返回x，那么直接报错，因为属于无限循环
  if (promise2 === x) {
    return reject(new TypeError("循环引用"));
  }

  let called;
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          function (y) {
            if (!called) {
              called = true;
            } else {
              return;
            }

            // y可能还是一个promise
            resolvePromise(promise2, y, resolve, reject);
          },
          function (r) {
            if (!called) {
              called = true;
            } else {
              return;
            }
            reject(r);
          }
        );
      } else {
        if (!called) {
          called = true;
        } else {
          return;
        }
        resolve(x);
      }
    } catch (error) {}
  } else {
  }
}

module.exports = Promise;
