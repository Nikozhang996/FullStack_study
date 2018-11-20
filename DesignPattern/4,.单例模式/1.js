/* 
 - 同一个实例
 - 
 */
class Window {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Window();
        }
        return this.instance;
    }
}

let w1 = Window.getInstance();
let w2 = Window.getInstance();

console.log(w1 === w2);