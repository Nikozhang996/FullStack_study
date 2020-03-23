Function.prototype.after = function(action) {
  const func = this;
  return function() {
    const result = func.apply(this, arguments);
    action.apply(this, arguments);
    return result;
  };
};

Function.prototype.before = function(action) {
  const func = this;
  return function() {
    action.apply(this, arguments);
    return func.apply(this, arguments);
  };
};

let func = function() {
  console.log("render");
};
func = func
  .before(function() {
    console.log("before");
  })
  .after(function() {
    console.log("after");
  });

func();
