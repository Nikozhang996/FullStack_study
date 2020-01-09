const fs = require("fs");
const EventEmitter = require("events");

class ReadStream extends EventEmitter {
  constructor(path, options = {}) {
    super();
    this.path = path;
    this.flags = options.flags || "r";
  }
}

module.exports = ReadStream;
