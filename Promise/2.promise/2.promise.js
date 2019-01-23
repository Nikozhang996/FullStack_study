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
  _this.status = 'pending';
  // 成功时的执行器
  function resolve(value) {
    if (_this.status === 'pending') {
      _this.value = value;
      _this.status = 'resolved';
      _this.onResolvedCallbacks.forEach(function (func) {
        func();
      });
    }
  }
  // 失败的时的执行器
  function reject(reason) {
    if (_this.status === 'pending') {
      _this.reason = reason;
      _this.status = 'rejected';
      _this.onRejectedCallbacks.forEach(function (func) {
        func();
      });
    }
  }
  // 执行器立即执行
  executor(resolve, reject);
}
Promise.prototype.then = function (onFulfilled, onRejected) {
  const _this = this;
  if (_this.status === 'resolved') {
    onFulfilled(_this.value);
  }
  if (_this.status === 'rejected') {
    onRejected(_this.reason);
  }
  // 如果executor中的异步操作，此时调用
  if (_this.status === 'pending') {
    _this.onResolvedCallbacks.push(function () {
      onFulfilled(_this.value);
    });
    _this.onRejectedCallbacks.push(function () {
      onRejected(_this.reason);
    });
  }
}
module.exports = Promise;

/**
 * 2、在原有的基础上，处理了异步的情况
 */