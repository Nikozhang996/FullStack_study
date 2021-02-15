/**
 * https://www.jmjc.tech/less/117
 * https://chenshenhai.github.io/koa2-note/note/request/post.html
 * */
const Koa = require("koa");
const fs = require("fs").promises;
const server = new Koa();
const PRON = 3000;

server.use(async function (ctx, next) {
  const { href, method } = ctx.request;
  console.log(href);
  await next();
});

server.use(async function (ctx, next) {
  console.log(ctx.url);
  switch (ctx.url) {
    case "/home": {
      ctx.response.status = 200;
      ctx.body = "home";
      break;
    }
    case "/bio": {
      ctx.body = "bio卡洛斯";
      break;
    }
    case "/vladimir": {
      ctx.body = "this is vladimir";
      break;
    }
    default: {
      // todo
      ctx.response.status = 200;
      ctx.response.type = "text/html; charset=utf-8"; // default
      ctx.body = await fs.readFile("./index.html");
    }
  }
  await next();
});
server.listen(PRON, function () {
  console.log(`端口${PRON}：已运行`);
});
