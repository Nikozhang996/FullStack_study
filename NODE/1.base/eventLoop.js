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

console.log(2 ** 256);



/* 
注意：NODE与浏览器环境有所区别
 */