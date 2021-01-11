/**
 * 泛型是在声明时无法确定类型，只有在调用时确定
 * TS可以自动推导普通类型
 * extends?
 * keyof?
 **/

// 基本示例
function createArray<T>(length: number, value: T) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(value);
  }

  return result;
}

// const arr = createArray<string>(4, "10");

// 元组
function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]];
}

// 函数表达式写法
interface IMySwap<A, B> {
  (tuple: [A, B]): [B, A];
}

// 索引接口
interface IArr<T> {
  [key: number]: T;
}

const swap1 = <T>(tuple: IArr<T>): IArr<T> => {
  return [tuple[1], tuple[0]];
};

// 求和函数
const sum = <T extends string>(a: T, b: T): T => {
  return (a + b) as T;
};

// console.log(sum<string>("8", "2"));

// 带指定length属性
interface IWithLength {
  length: number;
}

// 泛型拓展？
function getType<T extends IWithLength>(object: T) {
  return object.length;
}

// console.log(getType([1, 2]));
// 默认泛型
interface DStr<T = string> {
  hobby: T;
}

type h1 = DStr;
type h2 = DStr<string[]>;
type h3 = DStr<boolean>;

const myHobby1: h1 = { hobby: "coding" };
const myHobby2: h2 = { hobby: ["music", "coding"] };
const myHobby3: h3 = { hobby: true };

// 约束属性，keyof？表示取对象中的所有key属性
const getValue = <T extends Object, K extends keyof T>(obj: T, key: K) => {
  console.log(obj[key]);
};

// getValue({ a: 1, b: 2, c: 3 }, "a");
class MyArray<T> {
  public arr: T[] = [];
  add(value: T) {
    this.arr.push(value);
  }
  getMaxNum(): T {
    let arr = this.arr;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      current > max ? (max = current) : void 0;
    }
    return max;
  }
}

const arr = new MyArray();
arr.add(1);
arr.add(10);
arr.add(99);

// 类型映射
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Obj {
  a: string;
  b: string;
}

type ReadonlyObj = Readonly<Obj>;

const obj: ReadonlyObj = { a: "a", b: "b" };

// 条件类型（U ? X : Y）
type Extract<T, U> = T extends U ? T : never;

interface Worker {
  name: string;
  age: number;
  email: string;
  salary: number;
}
interface Student {
  name: string;
  age: number;
  email?: string;
  grade?: number;
}

type CommonKeys = Extract<keyof Worker, keyof Student>;

// Partial，把一个interface中的所有属性都设为可选状态
const student: Partial<Student> = {
  name: "vladimir",
};

// Required与Partial相反，把接口中的所有属性都设为必填
const student1: Required<Student> = {
  name: "vladimir",
  age: 20,
  email: "593177876",
  grade: 10,
};

//

interface Goods {
  id: string;
  name: string;
  price: string;
  image: string;
}

type g = Record<keyof any, Goods>;

export {};
