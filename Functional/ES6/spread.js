/**
 * 深拷贝
 * https://gitee.com/jw-speed/201807/blob/master/2.es6/3.spread.js
 */
function deepClone(object) {
  if (object === null) return null;
  if (typeof object != "object") return object; //函数,undefined无需处理，直接返回
  if (object instanceof RegExp) return new RegExp(object);
  if (object instanceof Date) return new Date(object);

  const newObj = new object.constructor();
  for (const key in object) {
    newObj[key] = deepClone(object[key]);
  }
  return newObj;
}

let obj = {
  name: "zjk",
  age: 20,
  hobby: [
    "code",
    "photo",
    {
      code: "js",
      photo: "500px",
    },
  ],
};

let newObj = deepClone(obj);
console.log(newObj);
console.log(obj === newObj);
