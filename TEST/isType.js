function isType(result) {
  return function (props) {
    return Object.prototype.toString.call(props).slice(8, -1) === result;
  }
}

const isNumber = isType('Number');
const isString = isType('String');
const isArray = isType('Array');
const isObject = isType('Object');
const isFunction = isType('Function');


const str = 'hello';
const num = 123;
const arr = [];
const obj = {};
const fun = function () {}

console.log(isString(str))
console.log(isNumber(num))
console.log(isArray(arr))
console.log(isObject(obj))
console.log(isFunction(fun))