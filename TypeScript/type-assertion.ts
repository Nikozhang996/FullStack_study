/* 
断言
*/

interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function getName(animal: Cat | Fish) {
  return animal.name;
}

const obj = { name: "123", swim() {} };

console.log("====================================");
console.log(getName(obj));
console.log("====================================");

export {};
