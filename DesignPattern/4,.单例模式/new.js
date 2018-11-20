const soldierProto = {
    type: '美国大兵',
    age: 20,
    run() {
        console.log('i can run');
    },
    die() {
        console.log('i can die');
    },
    fly() {
        console.log('i can fly');
    },
}

let soldiers = [];

/* create */
function create() {
    let soldier;
    for (let i = 0; i < 10; i++) {
        soldier = {
            id: i,
            lifeValue: 100,
        }
        soldier.__proto__ = soldierProto;

        soldiers.push(soldier)
    }
}

/* 批量创建 */
function CreateSoldier(id) {
    let temp = {};
    temp.id = id;
    temp.lifeValue = 100;
    Object.setPrototypeOf(temp, soldierProto);

    return temp;
}

/* Class */
class Soldier {
    constructor(id) {
        this.id = id;
        this.lifeValue = 100;
        this.type = '美国大兵';
        this.age = 20;
    }
    run() {
        console.log('i can run');
    };
    die() {
        console.log('i can die');
    };
    fly() {
        console.log('i can fly');
    };
}
for (let i = 0; i < 10; i++) {
    soldiers.push(new Soldier(i));
}

let s1 = soldiers[0];
console.log(s1.constructor);