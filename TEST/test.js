{
  var x = 1;
  var y = 0;
  var z = 0;

  function add(n) {
    n = n + 1;
  }
  y = add(x);

  function add(n) {
    n = n + 3;
  }
  z = add(x);
  s = y + z;



  /**
   * console.log(y); //undefined
   * console.log(z); //undefined
   * console.log(s); //NaN
   * 
   * 函数没有返回值则默认返回 undefined
   * undefined + undefined无法隐式转换所以结果为NaN
   */
}

{
  var x = 1;
  var y = 0;
  var z = 0;

  function add(n) {
    return n = n + 1;
  }
  y = add(x);

  function add(n) {
    return n = n + 3;
  }
  z = add(x);
  s = y + z;

  /**
   * console.log(y); //4 
   * console.log(z); //4
   * console.log(s); //8
   * 
   * 
   */
}

{
  
}