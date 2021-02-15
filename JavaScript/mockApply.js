name = "BIO卡洛斯";

{
  Function.prototype.mockApply = function (context) {
    context = context ? Object(context) : window;
    context.fn = this;
    // 初始化一个数组存放传入的变量
    const args = Array.from(arguments).slice(1);
    // 保存函数运行后的结果
    const r = context.fn(args);
    // 删除引用并返回
    delete context.fn;
    return r;
  };

  const obj = {
    name: "zjk",
    fn(args) {
      return `${this.name}+${args}`;
    },
  };

  console.log(obj.fn.mockApply(global, [123, 321]));
}
