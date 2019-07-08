/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 
    示例:
    给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
    https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-2/
 */

/*************************************************************************************************/

const nums = [2, 7, 11, 15];

const twoSum = function(nums, target) {
  if (!Array.isArray(nums)) {
    console.log("nums非数组");
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    const key_i = i;
    const value_i = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const key_j = j;
      const value_j = nums[j];

      if (value_i + value_j === target) {
        return [key_i, key_j];
      }
    }
  }

  console.log("结果不存在");
};

const twoSum2 = function(nums, target) {
  // 将数组转为哈希表，以值为key，索引为value
  let hashMap = new Map();
  nums.forEach((item, index) => hashMap.set(item, index));

  for (let i = 0; i < nums.length; i++) {
    let complementValue = target - nums[i], // 剩余值
      complementFlag = hashMap.has(complementValue), // 是否存在剩余值
      complementKey = hashMap.get(complementValue); // 剩余值索引

    if (complementFlag && complementKey != i) {
      return [i, complementKey];
    }
  }

  return "没有数据";
};

console.log(twoSum2(nums, 9));
console.log(twoSum2(nums, 18));
console.log(twoSum2(nums, 17));
