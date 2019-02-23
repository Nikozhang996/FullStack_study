/**
 * 1：bind生成一个新函数，返回改变this指向后的函数
 * 2：同时可以绑定参数
 * 3：如果绑定后的参数被new了，则new实例化的this指向当前的实例
 * 4：new出来的实例可以访问类的原型
 */
{
  // Function.prototype.mockBind = function (context) {
  //   // 保存调用者的引用
  //   var that = this;

  //   // 保存绑定时传入的变量
  //   var outArgs = Array.prototype.slice.call(arguments, 1);

  //   var func = function () {
  //     // 保存调用时的参数
  //     var innerArgs = Array.prototype.slice.call(arguments);
  //     return that.apply(this instanceof func ? this : context, outArgs.concat(innerArgs));
  //   }
  //   // 通过concatFn函数连接把实例的prototype指向它的构造函数，
  //   var concatFn = function () {};
  //   concatFn.prototype = that.prototype;
  //   func.prototype = new concatFn();
  //   return func;
  // }
}

// ES6
{
  Function.prototype.mockBind = function (...args) {
    const that = this;
    const [context, ...outArgs] = args;
    // 不能使用箭头函数，因为箭头函数无法被实例化
    const func = function (...innerArgs) {
      return that.apply(this instanceof func ? this : context, [...outArgs, ...innerArgs]);
    }

    const concatFn = function () {};

    concatFn.prototype = this.prototype;
    func.prototype = new concatFn();

    return func;
  }
}

global.name = 'BIO';
const obj = {
  name: 'zjk'
}

function logName(age, arg) {
  // return this.name + '：' + age + '：' + arg;
  this.age = age;
  this.arg = arg;
}
logName.prototype.props = 'this is a props'

const bindFn = logName.mockBind(obj, 666);
// const bindFn = logName.bind(obj, 666);
const fn = new bindFn(888);

console.log(fn.props);
// console.log(bindFn(888));