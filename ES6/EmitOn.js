const fs = require("fs"); // nodejs 文件模块（用于操作文件的模块）
const path = require("path");
const event = require("events"); // nodejs 的事件模块
const readFileEvent = new event.EventEmitter(); //创建事件对象

// 发布订阅
{
  // 订阅者
  readFileEvent.on('success_1', data => {
    console.log('success_1');
    readFileEvent.emit('success_2', data);
  });
  readFileEvent.on('success_2', data => {
    console.log('success_2');
    console.log(data);
  });
  // event.all('success_2', 'success_2', (sub1, sub2) => {
  //   console.log('all');
  //   console.log(sub1 + sub2);
  // });

  // 发布者
  fs.readFile(path.resolve('./1.txt'), (err, data) => {
    // console.log(err);
    // readFileEvent.emit('success_1', data);
  });
}

// all，哨兵变量
{
  const after = function (times, callback) {
    let map = {};
    return function (key, value) {
      map[key] = value;
      if (Object.keys(map).length === times) {
        callback(map);
      }
    }
  }

  let done = after(2, function (res) {
    console.log(Object.values(res));
  });

  done('data_1', 1);
  done('data_2', 2);
}
























/**
 * 参考资料
 * https://blog.csdn.net/qq_33024515/article/details/81604199
 */