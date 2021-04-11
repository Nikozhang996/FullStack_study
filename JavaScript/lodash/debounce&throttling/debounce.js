/**
 * debounce
 * @param {Function} func 回调函数
 * @param {Number} wait 延时时长
 * @param {Boolean} immediate 是否立即执行
 * @returns Function
 */
function debounce(func, wait = 1000, immediate = false) {
  let timeout = null;
  let context = null;
  let args = null;
  let previous = 0;

  function later() {
    const passed = Date.now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) func.apply(context, args);
      if (!timeout) args = context = null;
    }
  }

  return function () {
    context = this;
    args = arguments;
    previous = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      immediate === true && func.apply(context, args);
    }
  };
}
