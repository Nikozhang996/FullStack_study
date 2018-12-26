const actions = new Map([
    [1, function (params) {
        console.log(params);
    }],
    [2, function (params) {
        console.log(2);
    }],
    [3, function (params) {
        console.log(3);
    }],
    [4, function (params) {
        console.log(4);
    }],
]);

let fn = actions.get(1);
// fn('调用了方法1');

const actions_1 = new Map([
    ['fn_1', val => {
        console.log(`fn_1:${val}`);
    }],
    ['fn_2', val => {
        console.log(`fn_2:${val}`);
    }],
    ['fn_3', val => {
        console.log(`fn_3:${val}`);
    }],
    ['fn_4', val => {
        console.log(`fn_4:${val}`);
    }],
    ['default', function () {
        console.log(`没有！`);
    }]
])

function createFn(fn, num) {
    return actions_1.get(`${fn}_${num}`) || actions_1.get('default');
}

let fn_1 = createFn('fn', '4');
// fn_1('fn_x测试');























// https://mp.weixin.qq.com/s/k-c2A-0mrLPW-ebZ-0P3Ng