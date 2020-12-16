/* 
ES6类，class，实例属性方法，原型属性方法，静态属性方法

静态属性和方法都可被继承，子类同名则覆盖

public可以在类和实例中访问，可被继承

private只能在类中被访问，无法在子类和实例中访问，

protected允许被子类访问，但无法在子实例中访问
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
  static getType(): string {
    return "动物类";
  }

  private name: string;
  public age: number;
  protected constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log("animal say");
  }
}

class Cat extends Animal {
  static type = "猫";
  static getType() {
    return "猫类";
  }

  readonly address: string = null;

  constructor(name: string, age: number, address: any) {
    super(name, age); // 调用父类本身
    this.address = address;
  }

  say() {
    console.log("cat say");
    super.say();
  }

  private _eat: number = 10;
  get eat() {
    return this._eat;
  }
  set eat(value) {
    this._eat = value ** 2;
  }
}

const com1 = new Cat("Tom", 20, "USA");
const com2 = new Cat("And", 10, "USA");

class A {
  public a: string = "";
  private b: string = "";
  protected c: string = "";

  constructor(a?: string, b?: string, c?: string) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getA() {
    return `A：${this.a}`;
  }
  getB(): string | void {
    return `B：${this.b}`;
  }
  getC() {
    return `C：${this.c}`;
  }
  updateB() {
    this.b = "change";
  }
  updateC() {
    this.c = "change";
  }
}

class ChildA extends A {
  constructor(a, b, c) {
    super(a, b, c);
  }

  getA() {
    return `childA：${this.a}`;
  }

  getB() {
    // return `childC：${this.b}`;
  }

  getC() {
    return `childC：${this.c}`;
  }

  childUploadC(value) {
    this.c = value;
  }
}

const a = new A("A", "B", "C");
const childA = new ChildA("a", "b", "c");

// childA.a = "AAA";

console.log(childA.getC());
