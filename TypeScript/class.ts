/* 
ES6类，class，实例属性方法，原型属性方法，静态属性方法
*/

class Pointer {
  public x: number;
  public y: number;
  constructor(x: number, y?: number, ...args: (number | string)[]) {
    this.x = x;
    this.y = y;
  }
}

const pointer = new Pointer(1, 2, 3, 4, 5, 6);

class Animal {
  static type = "动物";
  static getType() {
    return "动物类";
  }

  private name: string;
  public age: number;
  protected constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log("say");
  }
}

class Cat extends Animal {
  constructor(parameters) {}
}
