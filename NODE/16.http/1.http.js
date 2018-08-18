const http = require('http');

const server = http.createServer();


server.on('request', (req, res) => {
    // req代表客户端请求，当客户端发数据过来后，才会触发on('data')事件
    console.log(req.method); // 请求方法，永远是大写
    console.log(req.url); // 请求的路径，https://xxxx.com:80/?a=1#top
    console.log(req.httpVersion); // 请求的HTTP版本号
    console.log(req.headers); // 请求头，所有值都是小写（NODE默认）
    req.on('data', function (data) {
        // 请求体
        console.log(data);
    });

    req.on('end', function () {
        console.log('end');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.sendDate = true;
        res.end('end');
    });
})


server.listen(3000, function () {
    console.log('服务器已开启，端口号为3000');
})