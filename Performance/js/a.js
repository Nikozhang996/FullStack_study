function logCount() {
  let count = 0;

  for (let i = 0; i < 10 * 1000 * 1000 * 80; i++) {
    count += i;
  }

  console.log(count);
}

function a() {
  b();
}

function b() {
  c();
}

function c() {
  d();
}

function d() {
  logCount();
}

a();
