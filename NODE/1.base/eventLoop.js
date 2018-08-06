/* 
执行栈，微任务，宏任务

每个宏任务执行完都清空一次微任务
 */

/* setTimeout(() => {
    Promise.resolve().then(_ => {
        console.log('then');
    })
}, 0);

setTimeout(() => {
    console.log(1);
}, 0);

setTimeout(() => {
    console.log(2);
}, 0);

setTimeout(() => {
    console.log(3);
}, 0); */


/* 
注意：NODE与浏览器环境有所区别
 */

let arr = new Array(999),
    step = 0;
arr.fill('BIO');

function asyncForEach(array, callback) {
    let index = 0;
    let timer = setInterval(function () {
        if (array.length === 0) {
            clearInterval(timer);
        } else {
            callback(array.shift());
        }
    })
}

asyncForEach(arr, value => {
    console.log(value + (++step));
})