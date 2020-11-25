interface ITarget {
  hello: () => void;
}

// 要被适配的类
class Adaptee {
  sayHello() {
    console.log("hello");
  }
}

class Adapter implements ITarget  {
    constructor(parameters) {
        
    }
} 