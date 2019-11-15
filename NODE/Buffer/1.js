const fs = require("fs");

fs.readFile("./text.txt", function(err, buf) {
  if (err) {
    console.log(err);
  } else {
    console.log(buf);
  }
});
