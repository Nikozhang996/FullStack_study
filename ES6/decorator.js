function CheckerDecorator(type) {
  return function (target, name, descriptor) {
    let v = descriptor.initializer && descriptor.initializer.call(this);
    return {
      enumerable: true,
      configurable: true,
      get: function () {
        return v;
      },
      set: function (c) {
        // 在此对传入的 c 的值做各种检查
        var cType = typeof c;
        // ...
        v = c;
      },
    };
  };
}
