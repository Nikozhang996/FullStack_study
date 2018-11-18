/**
 * public 
 * protected 
 * private
 */

class Person {
    public name: string;
    protected age: number;
    private money: number;
    constructor(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
}

class Student extends Person {
    public num: number;
    constructor(name: string, age: number, money: number, num) {
        super(name, age, money);
        this.num = num;
    }
    getName() {
        console.log(`我的名字是${this.name}`);
    }
    getAge() {
        console.log(`我今年${this.age}了`);
    }
    getMoney() {
        // 私有属性无法读取，只能在Person类中获取
        // console.log(`我的私房钱有${this.money}`);
    }
}

const bio = new Student('BIO卡洛斯', 20, 2000, 1);
