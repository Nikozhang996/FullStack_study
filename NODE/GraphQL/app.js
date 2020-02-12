/**
 * https://github.com/naihe138/GraphQL-demo
 * https://juejin.im/post/5a49e5ccf265da430d585cfd
 * https://juejin.im/post/5ba0a27b5188255c6a043058
 * */
const Koa = require('koa');
const KoaStatic = require('koa-static');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const {ApolloServer} = require('apollo-server-koa');
require('./mongodb');
const routerMap = require('./router');
const {typeDefs, resolvers} = require('./graphql/schema');
const apollo = new ApolloServer({typeDefs, resolvers});
const PRON = 3000;
// init
const app = new Koa();
const router = new KoaRouter();
// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));
// 路由配置
router.use(routerMap.routes());
// 使用路由
app.use(router.routes());
app.use(router.allowedMethods());
// 使用apollo
app.use(apollo.getMiddleware());

app.listen(PRON, () => {
  console.log(`🚀 GraphQL-demo server listen at http://localhost:${PRON}`);
  console.log(`🚀 Server ready at http://localhost:${PRON}${apollo.graphqlPath}`);
});
