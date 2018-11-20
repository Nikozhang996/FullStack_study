/* 透明单例 */
const Window = (function () {
    let window;

    return function (name) {
        if (window) {
            return window;
        } else {
            this.name = name;
            return (window = this);
        }

    }
})();

Window.prototype.getName = function () {
    console.log(this.name);
}

let w1 = new Window('w1');
let w2 = new Window('w1');

console.log(w1 === w2);
w1.getName()
w2.getName()

/* 
 * 1：通过闭包实现一个不销毁的作用域
 * 2：返回一个函数，通过new关键字
 */



/* 
 *  问题：
 *      违反了单一职责原则
 * 
 */