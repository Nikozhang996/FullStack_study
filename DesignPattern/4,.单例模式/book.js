/* 简单单例 */
class Singleton {
  constructor(name) {
    this.name = name;
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
  getName() {
    console.log(this.name);
  }
}

class Singleton2 {
  constructor(name) {
    this.name = name;
  }

  // static

  getName() {
    console.log(this.name);
  }
}

// let s1 = Singleton.getInstance('s1');
// let s2 = Singleton.getInstance('s2');
// console.log(s1 === s2);
