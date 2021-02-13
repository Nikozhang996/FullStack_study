interface p1 {
  width: number;
}

interface p2 {
  height: number;
}

interface p3 {
  name: string;
}
interface p4 {
  name: string;
}

type p5 = p1 | p2;
type p6 = p3 & p4;

const rang: p5 = {
  width: 100,
  height: 100,
};

function fn(): never {
  throw new Error("fn error");
}
const name: p6 = { name: fn() };

function mixin<T extends object, K extends object>(obj1: T, obj2: K): T & K {
  return { ...obj1, ...obj2 };
}

const r = mixin({ a: 1, b: 2 }, { c: 3, d: 5 });

console.log(r);

export {};
