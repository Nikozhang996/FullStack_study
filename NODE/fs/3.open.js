const fs = require('fs'),
    path = require('path');

// open 方法
fs.open(path.join(__dirname, 'temp.js'), 'w', function (err, fd) {
    const buf = Buffer.from('BIO卡洛斯'.toString());
    fs.write(fd, buf, 0, 12, 0, function (err, bytesWritten) {
        console.log(bytesWritten);
    })
});