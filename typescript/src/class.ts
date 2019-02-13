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