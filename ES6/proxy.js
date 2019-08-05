/**
 * proxy
 * Reflect?
 * */
const obj = {
  name: 'zjk',
  age: 20
};

const arr = [1, 2, 3, 4, 5];

/* {
  const objProxy = new Proxy(obj, {
    get(target, key, value) {
      if (key === undefined) {
        return '没有指定key'
      }
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
} */

const proxy1 = new Proxy(obj, {
  get(obj, key) {
    if (!key in obj) {
      return `key不存在`
    }
    if (key === undefined) {
      return `未选择Key`
    }

    return obj.key
  }
})


const withZeroValue = (target, zeroValue = 0) => new Proxy(target, {
  get: (obj, prop) => (prop in obj) ? obj[prop] : zeroValue
})

const newObj = withZeroValue(obj)

// console.log(newObj.name, newObj.age, newObj.address);

