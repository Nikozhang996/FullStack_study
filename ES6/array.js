// 类数组转为数组
function toArray(array) {
    return Array.from(array);
}

const arr = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    length: 5
};

const arr1 = {
    0: {
        key: 1,
        value: '11111'
    },
    1: {
        key: 2,
        value: '22222'
    },
    2: {
        key: 3,
        value: '33333'
    },
    3: {
        key: 4,
        value: '44444'
    }
}

console.log(arr1[3])