// 普通声明，函数会根据类型自动推断
function sum(a: number, b: number) {
  return a + b;
}

function sum1(a: number, b: string) {
  return a + b;
}

function sum2(a: number, b: number = 10) {
  return a + b;
}

// 函数重载

function toArray(value: number): number[];
function toArray(value: string): string[];
function toArray(value: number | string): number[] | string[] {
  if (typeof value === "string") {
    return value.split("");
  }
  if (typeof value === "number") {
    return value
      .toString()
      .split("")
      .map((item) => parseInt(item));
  }
}

toArray(123);
toArray("123");

console.log(toArray(123));
