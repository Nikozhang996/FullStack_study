/**
 * 泛型是在声明时无法确定类型，只有在调用时确定
 **/

function createArray<T>(length: number, value: T) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(value);
  }

  return result;
}

const arr = createArray(4, 10);

console.log(arr);
