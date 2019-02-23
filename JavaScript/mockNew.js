function mockNew() {
  const Constructor = [].shift.call(arguments);

  let obj = {};
  obj.__proto__ = Constructor.prototype;


}