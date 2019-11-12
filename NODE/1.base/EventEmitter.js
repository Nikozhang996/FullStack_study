/**
 * https://www.runoob.com/nodejs/nodejs-event.html
 */
const events = require("events");
const eventEmitter = new events.EventEmitter();

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
