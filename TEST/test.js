const arr = [1, 2, 3, 4, 6, 7]
const arr2 = [2, 3, 4, 6, 7]


function func(arr, target) {
  let temp = [...arr];
  const flag = temp.indexOf(target),
    last = temp.length
  // 第一项
  if (flag == 0) {
    let a = temp.splice(0, 2)
    return [...temp, ...a];
  }
  // 最后一项
  if (flag == last - 1) {
    return [...temp.slice(1, last), temp[0]]
  }
  // 中间项
  let arr1 = temp.splice(flag - 1, 3);
  return [...temp, ...arr1];
}

// console.log(func(arr, 1));
// console.log(func(arr, 5));
// console.log(func(arr, 7));


function func2(arr2, value) {
  let temp = [...arr];
  const start = value - 1,
    end = value;
  // 第一项
  if (start == 0) {
    let a = temp.splice(0, -1)
    return [...temp, ...a];
  }
  // 最后一项
  if (start == end - 1) {
    return [...temp.slice(1, end), temp[0]]
  }
}

console.log(func(arr, 1));


function func2(arr, target) {
  return [
    ...arr.find(item => item.key == target),
    ...arr.sort((a, b) => b.key - a.key).filter(item => item.key != target)
  ]
}

const arr3 = [{ "key": 14, "val": "14:00" }, { "key": 15, "val": "15:00" }, { "key": 16, "val": "16:00" }, { "key": 17, "val": "17:00" }, { "key": 18, "val": "18:00" }, { "key": 19, "val": "19:00" }, { "key": 20, "val": "20:00" }]


console.log(func2(arr3, 16));
