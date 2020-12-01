interface ITarget {
  hello: () => void;
}

// 要被适配的类
class Adaptee {
  sayHello() {
    console.log("hello");
  }
}

// extends
/* class Adapter extends Adaptee implements ITarget {
  hello() {
    super.sayHello();
  }
} */

class Adapter implements ITarget {
  private adaptee: Adapter;

  constructor(adaptee: Adapter) {
    this.adaptee = adaptee;
  }

  hello() {
    this.adaptee.sayHello();
  }
}

const person = new Adapter();

person.hello();
