/**
 * https://www.runoob.com/nodejs/nodejs-event.html
 * https://www.jianshu.com/p/0bd5070dc294
 */
const events = require("events");
const fs = require("fs");
const eventEmitter = new events.EventEmitter();
/* {
const callback = function(value) {
  console.log("callback firstEmit");
};

eventEmitter.addListener("firstEmit", callback);

eventEmitter.on("firstEmit", function(args) {
  console.log(args ** 2);
});

eventEmitter.on("firstEmit", function(args) {
  console.log(args ** 4);
});

setTimeout(function() {
  eventEmitter.emit("firstEmit", 2);
}, 200);

setTimeout(function() {
  // eventEmitter.removeListener("firstEmit", callback);
}, 300);

setTimeout(function() {
  eventEmitter.emit("firstEmit", 2);
}, 400);
} */

{
  function findPattern(files, regex) {
    const emitter = new events.EventEmitter();
    files.forEach((file, index) => {
      fs.readFile(file, (err, content) => {
        if (err) {
          emitter.emit("error", err);
          throw new Error(err);
        }
        emitter.emit("fileRead", file);
        if (regex.test(content)) {
          emitter.emit("found", content);
        }
      });
    });
    return emitter;
  }

  // findPattern(["main.js"], new RegExp("main", "i"))
  //   .on("error", function(err) {
  //     console.log(err);
  //   })
  //   .on("fileRead", function(file) {
  //     console.log(file + " read\n");
  //   })
  //   .on("found", function(content) {
  //     console.log(content.toString());
  //     console.log("\n");
  //   });
}

{
  // 基于发布订阅
  function helloEvents(value) {
    const eventEmitter = new events.EventEmitter();
    setTimeout(() => eventEmitter.emit("hello", value), 100);
    return eventEmitter;
  }

  // 基于回调函数
  function helloCallback(callback) {
    setTimeout(() => callback("hello world"), 100);
  }
 
  helloEvents("BIO卡洛斯").on("hello", function(value) {
    console.log(value);
  });

  helloCallback(function(value) {
    console.log(value);
  });
}
