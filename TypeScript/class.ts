class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  greet() {
    console.log(`hello ${this.#name}`);
  }
}

const vladimir = new Person("vladimir");

vladimir.greet()
// console.log();
