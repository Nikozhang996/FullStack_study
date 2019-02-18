class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}

class Student extends Person {
    id: number;
    constructor(name: string, age: number, id: number) {
        super(name, age);
        this.id = id;
    }
    getId(): number {
        return this.id;
    }
}

/* ********************************************************************** */
class Father {
    static className = 'Father';
    static getClassname() {
        return this.className;
    }

    public name: string;  //类里面 子类 其它任何地方外边都可以访问
    protected age: number; //类里面 子类 都可以访问,其它任何地方不能访问
    private money: number; //类里面可以访问， 子类和其它任何地方都不可以访问
    constructor(name: string, age: number, money: number) {//构造函数
        this.name = name;
        this.age = age;
        this.money = money;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}
class Child extends Father {
    constructor(name: string, age: number, money: number) {
        super(name, age, money);
    }
    desc() {
        console.log(`${this.name} ${this.age} ${this.money}`);
    }
}
/* ********************************************************************** */
