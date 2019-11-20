const fs = require('fs'),
    path = require('path');

const util = require('util');

const fs_copy = util.promisify(fs.copyFile);

fs_copy(path.join(__dirname, 'temp.js'), path.join(__dirname, './copyed.js'))
    .then(res => {
        console.log('成功');
    })
    .catch(err => {
        console.log(err);

    })