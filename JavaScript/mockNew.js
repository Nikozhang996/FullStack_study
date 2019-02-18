/* 
  class Person {
    Constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  } 
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function mockNew() {
  var Constructor = [].shift.call(arguments);
  var obj = {}
  obj.__proto__ = Constructor.prototype;
  var r = Constructor.apply(obj, arguments);
  return r instanceof Object ? r : obj;
}

// let person = new Person('zjk', 20);
let person = mockNew(Person, 'zjk', 20);

console.log(person);

/**
 * 初始化一个空对象，可以获取类上的属性和原型上的方法
 * 2：继承原型上的方法
 * 3：继承类上的属性，需要执行constructor并把this指向空对象obj，传入参数
 * 4：判断构造函数中是否返回Object，若true则直接返回return的值，false则返回处理后的结果。
 */