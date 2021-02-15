/*
类型保护，当一个联合类型无法被TS自动推导时，就需要用类似保护确保返回类型是可预期的

https://www.cnblogs.com/karthuslorin/p/12834076.html
*/

// typeof 语法
function getValue(value: string | number) {
  if (typeof value === "string") {
    return value.padStart;
  } else {
    return value.toFixed(2);
  }
}

// console.log(getValue(10));

// instanceof语法，通常用于确定class
class Dog {}
class Cat {}

// 构造函数返回值，new代表构造函数
type Clazz = new () => Dog | Cat;

const getInstance = (classParam: Clazz) => {
  return new classParam();
};

const instance = getInstance(Cat);

// if (instance instanceof Dog) {
//   console.log(instance);
// } else {
//   console.log(instance);
// }

// in操作符，通常用于识别interface
interface Fish {
  swiming: string;
}

interface Bird {
  fly: string;
}

function getType(animal: Fish | Bird) {
  if ("swiming" in animal) {
    return "fish";
  } else {
    return "bird";
  }
}

const fish: Fish = { swiming: "true" };
const bird: Bird = { fly: "true" };

console.log(getType(fish));

export {};
