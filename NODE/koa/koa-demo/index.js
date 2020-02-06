const Koa = require('koa');
const fs = require('fs').promises;

const server = new Koa();

server.use(async function (ctx) {
  console.log(ctx.request);
  console.log(ctx.response);

  const file = await fs.readFile('./index.html');
  console.log(file);


  ctx.body = file;

});


server.listen(3000);
