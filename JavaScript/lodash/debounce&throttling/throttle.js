/**
 * throttle，节流
 * @param {Function} func 回调函数
 * @param {Number} wait 延迟时长
 * @param {Object} options 配置项
 * @returns 返回装饰后的函数
 */
function throttle(func, wait, options) {
  let previous = 0;
  let timeout = null;
  let context = null;
  let args = null;
  let result = null;
  if (!options) options = {};

  return function throttle() {
    const now = Date.now();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      }, remaining);
    }
    return result;
  };
}
