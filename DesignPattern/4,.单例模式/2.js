/* 
 - ES5写法
 */

function Window(name) {
  this.name = name;
}

Window.prototype.getName = function () {
  console.log(this.name);
}

// 类的方法，非实例方法
Window.getInstance = (function () {
  let instance;
  return function (name) {
    if (!instance) {
      instance = new Window(name);
    }
    return instance;
  }
})();

let w1 = Window.getInstance('w1');
let w2 = Window.getInstance('w2');

console.log(w1 === w2);
w1.getName();
w2.getName();

let w3 = new Window('w3');
let w4 = new Window('w4');

console.log(w3 === w4);
w3.getName();
w4.getName();

/* 
 * 问题：客户端必须知道这是个单例模式的类，调用类上专门的方法。
 *      无法阻止客户端直接使用new关键字
 */