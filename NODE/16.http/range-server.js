const http = require('http');
const fs = require('fs');
const path = require('path');

/* 获取文件大小 */
function getFileSize(filePath) {
    return fs.statSync(path.join(__dirname, filePath)).size;
}

const server = http.createServer(function (req, res) {
    let range = req.headers['range'];
    if (range) {
        let [, start, end] = range.match(/(\d*)-(\d*)/);
        start = start ? Number(start) : 0;
        end = end ? Number(end) : size - 1;
        res.setHeader('Content-Range', `bytes ${start}-${end}/${size - 1}`);
        fs.createReadStream(path.join(__dirname,'my.txt'),{start,end}).pipe(res);
    } else {
        fs.createReadStream(path.join(__dirname,'my.txt')).pipe(res);        
    }
}).listen(3000)