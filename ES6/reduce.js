// 模拟一个简单的列表数据
const users = [{
    firstName: 'Bob',
    lastName: 'Doe',
    age: 37,
}, {
    firstName: 'Rita',
    lastName: 'Smith',
    age: 21,
}, {
    firstName: 'Rick',
    lastName: 'Fish',
    age: 28,
}, {
    firstName: 'Betty',
    lastName: 'Bird',
    age: 44,
}, {
    firstName: 'Joe',
    lastName: 'Grover',
    age: 22,
}, {
    firstName: 'Jill',
    lastName: 'Pill',
    age: 19,
}, {
    firstName: 'Sam',
    lastName: 'Smith',
    age: 22,
}];

/* 直接使用回调函数 */
const result = users
    // 首先筛选岁月在[20,30]之间
    .filter(user => user.age >= 20 && user.age <= 30)
    // 然后作姓名拼接
    .map(user => `${user.firstName}-${user.lastName}`)
    // 筛选名称长度小于10的
    .filter(name => name.length < 10);

/* 独立抽象函数，方便测试 */

// 筛选岁月在[20,30]之间
function isInTwenties(user) {
    return user.age >= 20 && user.age < 30;
};

// 姓名拼接生成一个全名
function fullNameHandler(user) {
    return `${user.firstName}-${user.lastName}`
};

// 筛选名称长度小于10的
function isAtLeastTenChars(name) {
    return name.length < 10;
};

const result_1 = users.filter(isInTwenties).map(fullNameHandler).filter(isAtLeastTenChars);




console.log(result_1);