const obj = {};

let temp = 3.14;
Object.defineProperty(obj, 'PI', {
  enumerable: true,
  configurable: true,
  get() {
    return temp;
  },
  set(value) {
    temp = value;
  }
})

// obj.PI = 6666;
// console.log(obj.PI);

//  简写
let obj2 = {
  temp: '',
  get PI() {
    return this.temp;
  },
  set PI(value) {
    this.temp = value;
  },
  func() {
    return this;
  }
}

obj2.PI = 66666
console.log(obj2.PI);