const Koa = require('koa');

const app = new Koa;

app.use((ctx, next) => {
    console.log(ctx.req.url);
    






    ctx.body = 'BIO卡洛斯'






}).listen(3000);