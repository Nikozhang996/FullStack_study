function after(value, callback) {
  let count = 0;
  return function () {
    count++;
    if (count >= value) {
      callback();
    }
  };
}

const afterFn = after(3, function () {
  console.log("hello");
});

afterFn();
afterFn();
afterFn();
afterFn();

function once(callback) {
  let count = 0;
  return function () {
    count++;
    if (count === 1) {
      typeof callback === "function" && callback.apply(null, arguments);
    }
  };
}

const onceFn = once(function () {
  console.log("once");
});

onceFn();
onceFn();
onceFn();
onceFn();
