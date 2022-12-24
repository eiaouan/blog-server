import koaRouter from 'koa-router';
import userRouter from './user'
let router = new koaRouter()
router.use('/user',userRouter.routes(),userRouter.allowedMethods())

export default router