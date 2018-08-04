/* 
process.nextTick的执行比promise优先
Promise.resolve().then(_ => {
    console.log('then');
})

process.nextTick(_ => {
    console.log('nextTick');
})
 */

/* 
class A {
    constructor() {
        
    }
    add(){

    }
}
 */

/* 
// 先执行settime队列，完后再执行微任务? 切换阶段时都走一次微任务
setTimeout(() => {
    console.log('time1');
    process.nextTick(_ => {
        console.log('nextTick');
    })
}, 1000);

setTimeout(() => {
    console.log('time2');
}, 1000);
 */

// 执行时间不定，需要看执行栈启动时间与定时器延迟时间，执行栈=>settimeout=>IO操作库
setImmediate(function () {
    console.log('immediate');
})

setTimeout(() => {
    console.log('then');
}, 0);