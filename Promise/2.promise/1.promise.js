function Promise(executor) {
  const _this = this;
  // 保存成功的值或失败的原因
  _this.value = undefined;
  _this.reason = undefined;
  // 保存当前Promise的状态（Promise有三个状态，pending,resolve,reject）
  _this.status = 'pending';
  // 成功的回调
  function resolve(value) {
    if (_this.status === 'pending') {
      _this.value = value;
      _this.status = 'resolved';
    }
  }
  // 失败的回调
  function reject(reason) {
    if (_this.status === 'pending') {
      _this.reason = reason;
      _this.status = 'rejected';
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
}
module.exports = Promise;