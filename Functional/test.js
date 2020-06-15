/* 
https://juejin.im/post/5d70e25de51d453c11684cc4
https://juejin.im/post/5e09554bf265da33b5074d7f
*/

{
  const finalPrice = (number) => {
    const doublePrice = number * 2;
    const discount = doublePrice * 0.8;
    const price = discount - 50;
    return price;
  };

  const result = finalPrice(100);
  // console.log(result); // => 110
}

{
  function compose() {
    const args = arguments;
    return function (x) {
      return Array.from(args).reduce(function (v, f) {
        return f(v);
      }, x);
    };
  }

  function double(x) {
    return x * 2;
  }
  function discount(x) {
    return x * 0.8;
  }
  function coupon(x) {
    return x - 50;
  }

  const finalPrice = compose(double, discount, coupon);

  const result = finalPrice(100);

  // console.log(result);
}

{
  function finalPrice(number) {
    return [number]
      .map((x) => x * 2)
      .map((x) => x * 0.8)
      .map((x) => x - 50);
  }

  const result = finalPrice(100);
  // console.log(result);
}

{
  function Box(value) {
    return {
      map(f) {
        return Box(f(value));
      },
      fold(callback) {
        return callback(value);
      },
      /*
        inspect 方法的目的是为了使用 Node.js 中的 console.log 隐式的调用它，方便我们查看数据的类型；
        而这一方法在浏览器中不可行，可以用 console.log(String(x)) 来代替; 
        Node.js V12 API 有变更，可以采用 Symbol.for('nodejs.util.inspect.custom') 替代 inspect
  
        inspect() {
          return `inspect output ${value}`;
        }, 
        */
    };
  }

  function finalPrice(str) {
    return Box(str)
      .map((x) => x * 2)
      .map((x) => x * 0.8)
      .map((x) => x - 50)
      .fold(function (value) {
        return value * 2;
      });
  }

  const result = finalPrice(100);
  console.log(result);
}
