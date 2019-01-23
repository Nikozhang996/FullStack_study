/**
 * 2019年1月1日 12点38分
 */

function func(param) {
  let count = 0;
  return function (value) {
    count = count + param * value;
    return count;
  }
};

let flag_1 = func(1);
let flag_2 = func(2);
let flag_3 = func(3);
console.log(flag_1(2));
console.log(flag_2(2));
console.log(flag_3(2));