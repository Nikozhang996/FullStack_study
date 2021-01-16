const fs = require("fs");

setInterval(() => {
  fs.appendFielsSync("1.txt", "vladimir ");
}, 1000);
