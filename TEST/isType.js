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

const isNull = isType('Null');

const str = 'hello';
const num = 123;
const arr = [];
const obj = {};
const fun = function () {}
const nul = null

{
  console.log(isString(str));
  console.log(isNumber(num));
  console.log(isArray(arr));
  console.log(isObject(obj));
  console.log(isFunction(fun));
  console.log(isNull(nul));
}


{
  console.log(isString(str));
  console.log(isNumber(num));
  console.log(isArray(new Set([1, 2, 3])));
  console.log(isObject(null));
  console.log(isFunction(fun));
  console.log(isNull(undefined));
}