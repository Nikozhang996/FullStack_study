function Promise(executor) {
  const self = this;
  // 保存成功的值和失败的原因
  self.value = undefined;
  self.reason = undefined;
  // 专门存成功的回调
  self.onResolvedCallbacks = [];
  // 专门存失败的回调
  self.onRejectedCallbacks = [];
  // 保存当下这个promise的状态(pending,resolve,reject)
  self.status = 'pending';
  /**
   * resolve
   * 成功的回调
   * @param value {any} 
   */
  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'resolved';
      self.onResolvedCallbacks.forEach(func => {
        func();
      });
    }
  }
  /**
   * reject
   * 失败的回调
   * @param reason {any} 
   */
  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = reason;
      self.onRejectedCallbacks.forEach(func => {
        func();
      });
    }
  }

  // executor需要立即调用
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
  const self = this;
  // 为保持链式调用，需要在调用then后返回一个新的Promise
  const promise2 = new Promise(function (resolve, reject) {
    if (self.status === 'resolved') {
      debugger
      let x = onFulfilled(self.value);
      resolvePromise(x, promise2, resolve, reject);
    }
    if (self.status === 'rejected') {
      let x = onRejected(self.reason);
      resolvePromise(x, promise2, resolve, reject);
    }
    // executor中有异步操作，此时调用then时 处于等待态
    if (self.status === 'pending') {
      self.onResolvedCallbacks.push(function () {
        let x = onFulfilled(self.value);
        resolvePromise(x, promise2, resolve, reject);
      });
      self.onRejectedCallbacks.push(function () {
        let x = onRejected(self.reason);
        resolvePromise(x, promise2, resolve, reject);
      })
    }
  });
  return promise2;

  // 解析链式调用的 （他还要和其他的promise进行结合）
  function resolvePromise(x, promise2, resolve, reject) {
    if (x === promise2) { // 自己不能等待自己完成
      return reject(new TypeError('循环引用'))
    }
    // 如果x是一个函数 或者x是一个对象 就有可能x是一个promise
    if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
      try {
        let then = x.then;
        if (typeof then == 'function') { // 是promise
          then.call(x, function (y) {
            resolve(y);
          }, function (r) {
            reject(r);
          })
        } else { // {then:123}
          resolve(x);
        }
      } catch (e) { // 如果x取then的时候可能会发生异常，如果有异常
        reject(e);
      }
    } else { // 普通值的情况直接成功即可
      resolve(x);
    }
  }
}
module.exports = Promise;