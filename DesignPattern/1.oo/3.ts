/* Animal */
class Animal {
    name: string
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    eat(food) {
        console.log(`${this.name}吃${food}`);
    }
}

class Person extends Animal {
    eat(food) {
        console.log(`${this.name}吃${food}`);
    }
}

let dog = new Dog('哈士奇')
let bio = new Dog('BIO卡洛斯')

dog.eat('肉')
bio.eat('饭')
