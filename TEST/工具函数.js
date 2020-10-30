let source = {
  a: 1,
  b: undefined,
  c: {
    a: 2,
    b: null,
    d: {
      a: undefined,
      e: "",
    },
  },
};

let result = {};
let temp = null;

function handler(source) {
  for (const key in source) {
    const element = source[key];
    if (
      typeof element === "object" &&
      element.constructor().toString() === "[object Object]"
    ) {
      console.log(element);
    }
    if (typeof element === "string" && element.length === 0) {
    }
    if (typeof element === "string" && element.length === 0) {
    }
    if (typeof element === "string" && element.length === 0) {
    }
  }
}

handler(source);
console.log(result);
