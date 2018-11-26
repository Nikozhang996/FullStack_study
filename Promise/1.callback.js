const fs = require('fs');
const path = require('path');

fs.readFile('./name.txt', 'utf-8', function (err, data) {
    console.log(err);
})