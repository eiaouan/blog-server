// 开启服务器
import Koa from 'koa';
// import koaOnerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'; // post参数处理
import logger from 'koa-logger'; // 输出日志
import cors from 'koa2-cors'; // 跨域处理
import koaStatic from 'koa-static'; // 静态资源处理
import router from './routers'
const app = new Koa()

// 使用中间件
// koaOnerror(app) // 添加获取错误对象
app.use(logger())

app.use(bodyparser())

app.use(cors())

app.use(koaStatic(__dirname + "/static"))

app.use( async (ctx:Koa.BaseContext,next:() => Promise<any>)=>{
    const start = new Date();// 开始时间
    await next()
    const ms = new Date().getTime() - start.getTime() // 获取执行时间
    console.log(`${ctx.method} ${ctx.URL} ->${ms}ms`);
})

app.on("error", (err, ctx) => {
    console.log(`\x1B[91m server error !!!!!!!!!!!!! \x1B[0m`, err, ctx);
  })
app.use(router.routes())
app.use(router.allowedMethods())

app.listen('3000');