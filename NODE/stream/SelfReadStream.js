const fs = require("fs");
const EventEmitter = require("events");

class ReadStream extends EventEmitter {
  constructor() {
    super();
  }
}

module.exports = ReadStream