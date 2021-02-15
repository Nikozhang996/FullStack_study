// 命名空间
namespace Vaildation {}

class Person3 {
  private money: number = 100; // 私有的，自己能访问，自己的被剥夺他其它
  getMoney() {
    console.log(`${this.money}`);
  }
}

let p3 = new Person3();

console.log(p3);
