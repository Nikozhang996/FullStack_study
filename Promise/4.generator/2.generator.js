function* gen(value) {
  let a = yield value++;
  console.log(a);
  let b = yield value + a;
  console.log(b);
  let c = yield value + b;
  console.log(c);
}

const it = gen(1);

it.next(7);
it.next(8);
it.next(9);
