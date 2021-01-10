type t1 = unknown & number;

// unknown , never 是unknown的子类型
type t2 = never extends unknown ? true : false;

// unknowm 不能使用keyof ， 否则获取到的值是never
type t3 = keyof unknown;
