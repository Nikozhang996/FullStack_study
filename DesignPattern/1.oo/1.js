class Animal {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    console.log(`${this.name}吃${food}`);
  }
}

class Dog extends Animal {
  state = "这是狗的工厂对象";
  constructor() {
    super("狗");
  }
  speak() {
    console.log("汪汪汪");
  }
}

class Cat extends Animal {
  state = "这是猫的工厂对象";

  constructor() {
    super("猫");
  }
  speak() {
    console.log("喵喵喵");
  }
}

const dog = new Dog();
const cat = new Cat();

// dog.eat('肉肉肉');
// cat.eat('鱼鱼鱼');

dog.speak();
