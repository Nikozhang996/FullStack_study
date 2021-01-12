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
