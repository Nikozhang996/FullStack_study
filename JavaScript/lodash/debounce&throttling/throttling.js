export default function debounce(func, time) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    setTimeout(function () {
      func.apply(this, arguments);
    }, time);
  }
}