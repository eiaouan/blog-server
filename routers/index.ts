import koaRouter from 'koa-router';
import userRouter from './user'
import sortRouter from './sort'
import tagRouter from './tag';
import articleRouter from './article';
import commentRouter from './comment';
import collectionRouter from './collection';
let router = new koaRouter()
router.use('/user',userRouter.routes(),userRouter.allowedMethods())
router.use('/sort',sortRouter.routes(),sortRouter.allowedMethods())
router.use('/tag',tagRouter.routes(),tagRouter.allowedMethods())
router.use('/article',articleRouter.routes(),articleRouter.allowedMethods())
router.use('/comment',commentRouter.routes(),commentRouter.allowedMethods())
router.use('/collection',collectionRouter.routes(),collectionRouter.allowedMethods())

export default router