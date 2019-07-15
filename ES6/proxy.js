/**
 * proxy
 * Reflect?
 * */
const obj = {
  name: 'zjk',
  age: 20
};

const arr = [1, 2, 3, 4, 5];

const objProxy = new Proxy(obj, {
  get(target, key, value) {
    return `返回结果：${Reflect.get(target, key)}`;
  },
  set(target, key, value) {
    if (key === 'length') return true;
    return Reflect.set(target, key, value);
  },
});

const arrProxy = new Proxy(arr, {
  get(target, key, value) {
    return key;
  },
  set(target, key, value) {
    return Reflect.set(target, key, value);
  },
});
arrProxy[99] = 666;
// console.log(arrProxy);

