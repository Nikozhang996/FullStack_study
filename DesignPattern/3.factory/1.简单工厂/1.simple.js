class Plant {
  constructor(name) {
    this.name = name;
  }
  grow() {
    console.log("我正在生长~");
  }
}

class Apple extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class Orange extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class Lemon extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class Factory {
  static create(type) {
    switch (type) {
      case "apple":
        return new Apple("苹果", "甜");
        break;
      case "orange":
        return new Apple("桔子", "酸");
        break;
      case "lemon":
        return new Apple("柠檬", "酸");
        break;
      default:
        throw new Error("你需要的东西我没有。");
    }
  }
}

const apple = Factory.create("apple");
const orange = Factory.create("orange");
const lemon = Factory.create("lemon");

console.log(apple);
console.log(orange);
console.log(lemon);

let err = new Orange();

console.log(err);
