function logCount() {
  let count = 0;

  for (let i = 0; i < 10 * 1000 * 1000 * 10; i++) {
    count += i;
  }

  console.log(count);
}
