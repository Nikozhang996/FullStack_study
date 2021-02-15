// https://gitee.com/jw-speed/201905jiagouke/blob/master/7.review/1.homework.js

// 函数柯里化
{
  /**
   * 优势：
   * 1：封装和复用参数
   * 2：保持函数作用域引用
   * */
  function add(a, b, c, d) {
    return a + b + c + d;
  }
  function currying(fn, args = []) {
    // 我每次都到这个数组中
    let len = fn.length;
    return (..._) => {
      args.push(..._);
      if (args.length < len) {
        // [1,2,2,4]  == 4
        return currying(fn, args);
      }
      return fn(...args);
    };
  }

  const fn = currying(add)(1, 2)(2); // 先保存每次调用后的参数

  // console.log(fn(1));
}

// 数组降维
{
  const arr = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10]]]]];

  function arrayFlatByES5(array, count) {
    return array.reduce(function (result, item) {
      if (Array.isArray(item)) {
        return result.concat(arrayFlatByES5(item));
      } else {
        result.push(item);
        return result;
      }
    }, []);
  }

  function arrayFlatByES6(array, depth) {
    let count = typeof depth === "number" && depth > 0 ? depth : undefined;

    if (count > 0 || typeof count === "undefined") {
      return array.reduce(
        (result, item) =>
          Array.isArray(item)
            ? [...result, ...arrayFlatByES6(item, count - 1)]
            : [...result, item],
        []
      );
    }
    if (count === 0) {
      return [];
    }
    // return array.reduce(
    //   (result, item) =>
    //     Array.isArray(item)
    //       ? [...result, ...arrayFlatByES6(item)]
    //       : [...result, item],
    //   []
    // );
  }

  Array.prototype.selfFlat = function (count) {
    return this.reduce(function (result, item) {
      if (Array.isArray(item)) {
        return result.concat(item.selfFlat());
      } else {
        result.push(item);
        return result;
      }
    }, []);
  };
  console.log(arrayFlatByES6(arr));
  // console.log(arr.selfFlat());
}
