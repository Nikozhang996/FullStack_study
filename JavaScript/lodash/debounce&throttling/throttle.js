function throttle(func, wait, option) {
  const now = Date.now();
  let previous = 0;
  if (!previous && option.leading === false) previous = now;
  const remaining = wait - (now - previous);
}
