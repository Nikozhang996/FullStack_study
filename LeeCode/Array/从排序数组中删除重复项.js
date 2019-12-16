/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/
 * */
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 3];

// ES6原生方法，利用Set结构特征创建一个Set最后转换为Array
function removeDuplicatesBySet(array = []) {
  return [...new Set(array)];
}

// 利用indexOf寻找特征，如果当前项在该数组后面位置不存在则推入新Array
function removeDuplicatesByIndexOf(array) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    array.slice(i + 1).indexOf(item) === -1 && temp.push(item);
  }
  return temp;
}

function removeDuplicatesByIndexOfReduce(array) {
  return array.reduce((result, item, index, source) => {
    return source.slice(index + 1).indexOf(item) === -1
      ? [...result, item]
      : result;
  }, []);
}

// 利用Array.prototype.ncludes方法查询后项有无相同值，思路与indexOf一致
function removeDuplicatesByIncludes(array) {
  return array.reduce((result, item, index, source) => {
    return source.slice(index + 1).includes(item) ? result : [...result, item];
  }, []);
}

function removeDuplicates(array) {
  let a = 0,
    b = 1;

  while (a < array.length) {
    const prev = array[a];
    const next = array[b];
    if (prev !== next) {
      array[a + 1] = next;
      a++;
    }
    b++;
  }
}
let result = [];

// result = removeDuplicatesBySet(nums);
// result = removeDuplicatesByIndexOf(nums);
// result = removeDuplicatesByIndexOfReduce(nums);
// result = removeDuplicatesByIncludes(nums);
result = removeDuplicates(nums);

console.log(nums);
