const obj = new Proxy(
  {
    name: "VLADIMIR",
  },
  {
    get: function (target, prop, receiver) {
      console.log(`getting ${prop}!`);
      return Reflect.get(target, props, receiver);
    },
    set: function (target, prop, value, receiver) {
      console.log(`setting ${prop}：${value}!`);
      target.prop = value;
      // return Reflect.set(target, prop, value, receiver);
    },
  }
);

function createArray(...elements) {
  let target = [...elements];
  return new Proxy(target, {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    },
  });
}

let arr = createArray("a", "b", "c");
console.log(arr[-2]); // c
