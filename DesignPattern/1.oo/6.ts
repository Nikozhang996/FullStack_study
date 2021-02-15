/* 函数重载 */
// 在Java里，方法名相同，参数数量、数量相同但类型不同也是不同的方法。
function print(...args) {
  console.log(args.length);
}

print(1, 2, 3, 5, 5);
