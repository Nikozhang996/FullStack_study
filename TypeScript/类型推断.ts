/* 
类型是在哪里如何被推断的。
*/

// 1、基本类型推断
let x = 3;

let x1 = [0, 1, "2", null];

// 2、函数默认会进行推断 函数会根据右边的赋值 推到左边的类型  不用特意标注类型
const sum = (a: number, b: number) => {
  return a + b;
};

// 3、属性推断
const school = {
  name: "zf",
  age: 10,
};

// 解构会取同样属性
let { name, age } = school;

interface ISchool {
  name: string;
  age: number;
  address: {
    n: string;
  };
}

// 接口取属性
type n = ISchool["address"]["n"];

// 从对象中反推属性类型
type MySchool = typeof school;

export {};
