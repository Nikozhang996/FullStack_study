function fn() {
  /*
   let args = Array.prototype.map.call(arguments, ((item, index, array) => {
    return item;
    }));

   */
  let args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  return args;
}

function fn2() {
  fn(1, 2, 3, 4, 5).forEach(item => {
    console.log(eval(item)); // item => arguments[i]
  });
}
fn2(5, 4, 3, 2, 1)