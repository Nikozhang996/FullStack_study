{
  Function.prototype.mockCall = function (context) {
    // 初始化上下文context，若context为普通类型则转为对象
    context = context ? Object(context) : window;
    // 预设一个上下文保存当前this，this为当前call调用前的函数
    context.fn = this;
    // 保存调用call时传入的其他变量索引，arguments[i]
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
      args.push('arguments[' + i + ']');
    }
    // 执行fn函数并根据arguments[i]读取变量
    let r = eval('context.fn(' + args + ')');

    delete context.fn;
    return r;
  }

  const obj = {
    name: 'zjk',
    fn(...args) {
      return this.name + args;
    }
  }

  name = 'BIO';

  function fn1() {
    console.log(1);
  }

  function fn2() {
    console.log(2);
  }

  // console.log(obj.fn.mockCall(global, 123, 321));

  // fn1.mockCall(fn2)
  // fn1.call.call(fn2)
}

{
  Function.prototype.mockCall = function (context) {
    // 初始化上下文context，若context为普通类型则转为对象存储
    context = context ? Object(context) : window;
    // 将当前调用方法存入context中
    context.fn = this;
    // 初始化一个数组存放传入的变量
    const args = Array.from(arguments).slice(1);
    // 保存函数运行后的结果
    const r = context.fn(...args);
    // 删除引用并返回
    delete context.fn;
    return r;
  }

  const obj = {
    name: 'zjk',
    fn(...args) {
      return `${this.name}+${args}`;
    }
  }

  console.log(obj.fn.mockCall(global, 123, 321));

}