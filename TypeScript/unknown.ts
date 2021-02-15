//
type t1 = unknown & number;
//
type t4 = unknown | string;

// unknown , never 是unknown的子类型
type t2 = never extends unknown ? true : false;

// unknowm 不能使用keyof ， 否则获取到的值是never
type t3 = keyof unknown;

let unknown: unknown;
let any: any;

unknown = any = { name: "vladimir" };

unknown.name; // unknown无法取属性和方法
any.name;
