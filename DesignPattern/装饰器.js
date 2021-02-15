Function.prototype.before = function (beforeFunc) {
  const _this = this;
  return function () {
    beforeFunc.apply(_this, arguments);
    _this.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFunc) {
  const _this = this;
  return function () {
    _this.apply(this, arguments);
    afterFunc.apply(_this, arguments);
  };
};

const obj = {
  fn() {
    console.log(this);

    console.log("context");
  },
};

function fn() {
  console.log("context");
}

const func = obj.fn
  .before(function () {
    console.log("before");
  })
  .after(function () {
    console.log("after");
  });

func();
