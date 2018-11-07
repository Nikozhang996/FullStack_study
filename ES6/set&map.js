/* Set */
const set = new Set([1, 1, 1, 2, 3, 4, 6, 7, 6, 5, 4, ]);

// 添加
set.add(99);
// 删除
set.delete(1)

// 迭代遍历
for (const [key, value] of set.entries()) {
    if (key == 2) {

    }
}

// 数组求并集
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]
}
// console.log(union([1,2,3],[2,3,4,5]));

// 数组求交集
function insetction(arr1, arr2) {
    return [...new Set(arr1)].filter(item => {
        return new Set(arr2).has(item);
    })
}
// console.log(insetction([1, 1, 2, 3], [2, 3, 4, 4, 5]));

// 数组求差值
function diffrence(arr1, arr2) {
    return [...new Set(arr1)].filter(item => {
        return !new Set(arr2).has(item);
    })
}
console.log(diffrence([1, 2, 2, 3, 3, 4], [2, 2, 3, 3, 5]));