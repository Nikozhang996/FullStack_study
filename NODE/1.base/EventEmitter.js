/**
 * https://www.runoob.com/nodejs/nodejs-event.html
 * https://github.com/forthealllight/blog/issues/21
 * https://www.jianshu.com/p/0bd5070dc294
 */
const events = require("events");
const fs = require("fs");
const eventEmitter = new events.EventEmitter();
{
  eventEmitter.addListener("firstEmit", function (value) {
    console.log("添加firstEmit监听器");
  });

  eventEmitter.on("firstEmit", function (args) {
    console.log(args ** 2);
  });

  eventEmitter.on("firstEmit", function (args) {
    console.log(args ** 4);
  });

  setTimeout(function () {
    eventEmitter.emit("firstEmit", 2);
  }, 200);

  setTimeout(function () {
    // eventEmitter.removeListener("firstEmit", callback);
  }, 300);

  setTimeout(function () {
    eventEmitter.emit("firstEmit", 8);
  }, 400);
}

/* {
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

  findPattern(["main.js"], new RegExp("main", "i"))
    .on("error", function (err) {
      console.log(err);
    })
    .on("fileRead", function (file) {
      console.log(file + " read\n");
    })
    .on("found", function (content) {
      console.log(content.toString());
      console.log("\n");
    });
} */

// 基于发布订阅
{
  function helloEvents(value) {
    // 需要注意eventEmitter的订阅者和发布者的时间顺序 ，即eventloop关系。
    const eventEmitter = new events.EventEmitter();
    if (typeof value === "undefined") {
      setTimeout(() => eventEmitter.emit("error", "value有误，请检查"), 10);
    } else {
      setTimeout(() => eventEmitter.emit("hello", value), 10);
    }
    return eventEmitter;
  }

  helloEvents("VLADIMIR")
    .on("error", function (err) {
      console.log("handleerror", err);
    })
    .on("hello", function (value) {
      console.log(value);
    });
}
