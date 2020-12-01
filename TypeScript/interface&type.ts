/* 

1：Extend，接口和类型别名都能够被扩展，但语法有所不同。此外，接口和类型别名不是互斥的。接口可以扩展类型别名，而反过来是不行的。
2：Declaration merging，同名interface会自动合并为一个
3：类不能以联合类型定义别名

*/

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

class SomePoint implements CombinablePointType {
  x = 1;
  y = 2;
  z = 3;
}

const point = new SomePoint();

console.log(point.x);
