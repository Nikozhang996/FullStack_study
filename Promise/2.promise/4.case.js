const Promise = require('./4.promise');

let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

p
  .then(
    function (value) {
      // 此时会发生循环引用，直接出错，因为返回值永远是Pending状态
      return new Promise(function (resolve, reject) {
        resolve(1000);
      })
    })
  .then(
    function (value) {
      console.log('suc:' + value);
    },
    function (reason) {
      console.log('err:' + reason);
    });