function debounce(func, timeout) {
  let timer = null;
  clearTimeout(timer);
  return function () {
    timer = setTimeout(function () {
      func.apply(this, arguments);
    }, timeout);
  };
}
