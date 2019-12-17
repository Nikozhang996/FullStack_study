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

// 利用双指针思路进行位移操作，解决On^2问题。但注意该方法一定是保证数组是有序的
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shuang-zhi-zhen-shan-chu-zhong-fu-xiang-dai-you-hu/
function removeDuplicates(array) {
  let temp = [...array];
  let a = 0,
    b = 1;

  while (b < temp.length) {
    const prev = temp[a];
    const next = temp[b];
    if (prev !== next) {
      temp[a + 1] = next;
      a++;
    }
    b++;
  }

  return temp.slice(0, a);
}
let result = [];

// result = removeDuplicatesBySet(nums);
// result = removeDuplicatesByIndexOf(nums);
// result = removeDuplicatesByIndexOfReduce(nums);
// result = removeDuplicatesByIncludes(nums);
result = removeDuplicates(nums);

console.log(result);
