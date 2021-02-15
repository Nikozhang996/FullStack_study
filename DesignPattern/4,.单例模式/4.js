/* 把类的实例创建逻辑和单例实现逻辑分开 */
function Window(name) {
  this.name = name;
}

Window.prototype.getName = function () {
  console.log(this.name);
};

const CreateWindow = (function () {
  let instance;

  return function (name) {
    if (!instance) {
      // 创建实例逻辑
      instance = new Window(name);
    }
    return instance;
  };
})();

let w1 = new CreateWindow("w1");
let w2 = new CreateWindow("w2");

console.log(w1 === w2);
w1.getName();
w2.getName();
