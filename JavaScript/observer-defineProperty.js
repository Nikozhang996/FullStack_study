function observeArrayChange() {
  const oldArrayPrototype = Array.prototype;
  const proto = Object.create(oldArrayPrototype);

  ["push", "shift", "unshift"].forEach(function (method) {
    proto[method] = function () {
      updateView();
      oldArrayPrototype[method].apply(this, arguments);
    };
  });

  return proto;
}

function updateView(value) {
  console.log(`更新数据：${value}`);
}

function observe(data) {
  if (typeof data !== "object" || data == null) {
    return data;
  }

  if (Array.isArray(data)) {
    data.__proto__ = observeArrayChange();
  }

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      defineReactive(data, key, data[key]);
    }
  }
}

function defineReactive(data, key, value) {
  observe(value); // 递归监听Object所有属性
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        observe(newValue); // 对新赋值的数据进行劫持
        updateView(newValue);
        value = newValue;
      }
    },
  });
}

let person = {
  name: "Vladimir",
  hobbies: ["game", "code", "photo"],
  data: {
    age: 20,
    addresss: "GuangZhou",
  },
};

observe(person);

person.name = "BIO";
person.data.age = 25;
person.hobbies.push("play");

console.log(person.name);
