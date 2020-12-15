/* 
ES6类，class，实例属性方法，原型属性方法，静态属性方法
*/

class Pointer {
  public x!: number;
  public y: number;
  constructor(x: number, y?: number, ...args: number[]) {
    this.x = x;
    this.y = y;
  }
}
