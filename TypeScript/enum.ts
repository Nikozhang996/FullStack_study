/* 
1：enum分为数字枚举、字符串枚举、数字字符串混合的异构枚举三种类型
2：数字枚举中，若成员赋值而后续成员无赋值则会自动追加1
3：目前 TypeScript 只支持将数字和字符串作为枚举成员值。不允许使用其他值，比如 symbols。

*/

enum YesOrNo {
  Yes = 1,
  No = 0,
}

function checkType(value: YesOrNo) {
  switch (value) {
    case YesOrNo.Yes:
      return "是";
    case YesOrNo.No:
      return "否";
    default: {
      return "404";
    }
  }
}
// console.log(checkType(1));

// 如果枚举中某个成员值使用电显式方式赋值，但后续成员未显示赋值，TS则会自动在当前值中追加1作为后续值
enum DefaultEnum {
  A,
  B,
  D,
  F,
}

console.log(DefaultEnum);
