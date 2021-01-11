// 类数组转为数组
function toArray(array) {
    return Array.from(array);
}

const arr = [{
        key: 1,
        value: '1'
    },
    {
        key: 2,
        value: '2'
    },
    {
        key: 3,
        value: '3'
    },
    {
        key: 4,
        value: '4'
    },
    {
        key: 5,
        value: '5'
    },
]

let res = arr.find(item => {
    return item.key == 3
})

console.log(res);