## 参考资料

https://gitee.com/jw-speed/jiagouke3-vue/tree/master/12.ts-lesson/src

## types 类型

## class 类

## function 函数

## overload 重载

## enum 枚举

## interface 接口

## generic 泛型

## 类型推断

## 类型保护

## 交叉类型

## 类型兼容

## 条件类型

## 内置类型

## 自定义类型

## unknown

- unknown 不知道的类型
- 是 any 的安全类型
- unknown 类型可以被任何类型赋值
- unknown 不能取属性，也不能取方法
- 类型推断，没有传入类型时，默认会推导出 unknown 类型
- unknown 和其他类型的联合类型，都是 unknown
- unknown 和其他类型做交叉，或得到的永远是其他类型

## namespace

命名空间 为了划分作用域 防止变量冲突 在 ts 中为了解决同一个模块中可能命名冲突

- ts 中依然可以支持 es6 语法
- ts 中模块分为两种，一种内部模块（命名空间代替了内部模块），另一种是外部模块，`import export`
- 命名空间也可以嵌套

```typescript
export namespace School1 {
  export class Teacher {}
  export namespace Room {
    export const a = "room";
  }
}
```

## 模块引入

类型声明，只做为代码提示功能，不是同名的就能合并

```typescript
declare let vue: string; // declare 关键字 只是让我们的代码有提示功能而已
declare function sum(): void; // 没有实现
declare class Person {}
declare interface Tamoto {
  name: string;
}
declare namespace A {
  const a: string; // declare 里面的内容 不需要导出 也不需要在增加declare
}
declare enum Seansos {
  Spring,
  Summer,
}
```

## 疑点

- export = Jquery

## 细节知识

- type 可以声明联合类型，而 interface 不行，interface 可以实现合并和拓展
- interface 相同名称会自动合并
- class 也可以作为类型接口来定义
- d.ts 文件后缀中 d 为 declare，所以通常做类型声明文件使用
- 如果模块本身就是 ts 写的，则不需要安装@types 文件
- （接口同名的接口可以自动合并） (函数和命名空间能自动合并) （命名空间和 命名空间也能合并）
- typeof object 可以从对象中反推对象的属性类型
