const fs = require("fs");

const readFilePromise = function (path, encoding, callback) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFilePromise(`${__dirname}/data/name.txt`, "utf8")
  .then((res) => {
    return readFilePromise(`${__dirname}/data/${res}`, "utf8");
  })
  .then((res) => {
    return readFilePromise(`${__dirname}/data/${res}`, "utf8");
  })
  .then((res) => {
    // console.log(res);
    // return Promise.reject('错误了')
    return Promise.resolve("成功了");
  })
  .then()
  .then(
    (res) => {
      console.log(`then:${res}`);
      return Promise.reject("失败了");
    },
    (err) => {}
  )
  .then() // 值的穿透
  .then(
    (res) => {
      console.log(`then:${res}`);
    },
    (err) => {
      console.log(`then:${err}`);
    }
  )
  // catch作为最后一项，监听整个流程的错误处理
  .catch((err) => {
    console.log(err);
  });
