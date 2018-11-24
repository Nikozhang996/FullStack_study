/* 把类的实例的创建逻辑和单例逻辑分开 */

/* Window */
class Window {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

/* Dialog */
class Dialog {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

/* 创建单例函数 */
const CreateSingle = function (Constructor) {
    let instance;
    return function () {
        if (!instance) {
            instance = new Constructor(...arguments)
        }
        return instance;
    }
}

const createWindow = CreateSingle(Window);
let w1 = new createWindow('w1');
let w2 = new createWindow('w2');

console.log(w1 === w2);

const createDialog = CreateSingle(Dialog);
let d1 = new createDialog('d1');
let d2 = new createDialog('w2');

console.log(d1 === d2);