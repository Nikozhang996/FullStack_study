/* 把类的实例的创建逻辑和单例逻辑分开,创建实例由一个工厂函数处理 */

// Window
function Window(name) {
    this.name = name;
}
Window.prototype.getName = function () {
    console.log(this.name);
}

// Dialog
function Dialog(title, content) {
    this.title = title;
    this.content = content;
}
Dialog.prototype.getTitle = function () {
    console.log(this.title);
}
Dialog.prototype.getContent = function () {
    console.log(this.content);
}

// 单例工厂，传入一个实例，返回创建工厂
const CreateSingle = function (Constructor) {
    let instance;
    return function () {
        if (!instance) {
            Constructor.apply(this, arguments);
            Object.setPrototypeOf(this, Constructor.prototype);
            instance = this;
        }
        return instance;
    }
}

let createWindow = CreateSingle(Window);
let w1 = new createWindow('w1');
let w2 = new createWindow('w2');
w1.getName();
w2.getName();
// console.log(w1 === w2);


let createDialog = CreateSingle(Dialog);
let d1 = new createDialog('d1', 'content1');
let d2 = new createDialog('d2', 'content2');
// console.log(d1 === d2)
d1.getTitle();
d2.getTitle();