/* 
0：interface可以被继承和实现，type不行，type可以定义联合类型
1：Declaration merging，同名interface会自动合并为一个
2：interface可以描述属性、方法、类
*/

// 描述对象
interface IObject {
  name: string;
  age: number;
}

const person: IObject = {
  name: "vladimir",
  age: 20,
};

// 描述函数
interface IFunction {
  (a: number, b: number): number;
}

const getSum: IFunction = (a, b) => {
  return a + b;
};

const getFullName = (firstName: string, lastName: string): string => {
  return firstName + lastName;
};

// 混合类型
interface ICount {
  count: number;
  (): number;
}

const getCount: ICount = () => {
  return ++getCount.count;
};

getCount.count = 0;

// 接口合并
interface IVegetables {
  taste: string;
  color: string;
}

interface IVegetables {
  size: number;
  readonly price: number;
}

const apple: IVegetables = {
  taste: "a",
  color: "red",
  size: 20,
  price: 10,
};

// 自定义类型
interface ISelf {
  name: string;
  age: number;
  [key: string]: any; // [key: string]
}

const obj: ISelf = {
  name: "zjk",
  age: 20,
  address: "guangzhou",
};

// 接口被类实现
interface ISpeakable {
  name: string;
  speak(): number;
}

interface IChineseSpeakable {
  speak(): number;
}

class Speak implements ISpeakable, IChineseSpeakable {
  name!: string; // 断言
  speak(): number {
    return 10;
  }
}

// 抽象类，只有被继承无法被实例化
abstract class Animal {
  abstract name: string;
  eat() {
    console.log("eat");
  }
}

class Cat extends Animal {
  name: string = "";
}

const cat = new Cat();

/* ********************************************************** */

// interface
interface IPartialPointX {
  x: number | string;
}

interface IPoint extends IPartialPointX {
  y: number | string;
}

// type
type TPartialPointX = {
  x: number | string;
};
type TPoint = TPartialPointX & {
  y: number | string;
};

// interface extends type
type TextendInterface = IPartialPointX & {
  y: number | string;
};

// type extends inferface
interface IextendType extends TPartialPointX {
  y: number | string;
}

// 接口同名可以自动合并
interface ImergePoint {
  x: number | string;
}

interface ImergePoint {
  y: number | string;
}
interface ImergePoint {
  z?: number | string;
}

const xy: TextendInterface = {
  x: 100,
  y: 100,
};

type CombinablePointType = { x: string } | { x: number };

/* class SomePoint implements CombinablePointType {
  x = 1;
  y = 2;
  z = 3;
}
 */
export {};
