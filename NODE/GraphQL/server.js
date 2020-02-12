/**
 * https://juejin.im/post/5a49e5ccf265da430d585cfd
 * */
const Koa = require('koa');
const KoaStatic = require('koa-static');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

// 路由设置test
