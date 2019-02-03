{
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
}

// obj.PI = 6666;
// console.log(obj.PI);

//  简写
{
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

}

// obj2.PI = 66666
// console.log(obj2.PI);

/* ************** */
{
  const obj = {
    name: 'zjk',
    age: 20
  }

  function update(value) {
    console.log(value);
  }

  function observer(object) {
    if (typeof object != 'object') {
      return object; // 只有对象才需要监听，普通值直接返回即可
    }

    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        defineReactive(object, key, object[key]);
      }
    }
  }

  function defineReactive(object, key, value) {
    observer(value)
    Object.defineProperty(object, key, {
      get() {
        return value;
      },
      set(val) {
        if (value != val) {
          // 执行update
          update(`${key}：更新了！`);
          value = val;
        }
      }
    })
  }

  observer(obj);

  obj.name = 'BIO卡洛斯';
  obj.age = 30;
}