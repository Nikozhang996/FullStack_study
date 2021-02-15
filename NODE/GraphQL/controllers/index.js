const info = require("./src/info");
const course = require("./src/course");
const student = require("./src/student");

module.exports = {
  ...info,
  ...course,
  ...student,
};
