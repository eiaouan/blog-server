import koaRouter from 'koa-router';
import { getAllUserInfo } from '../control/user';
let userRouter = new koaRouter()
userRouter.get('/getAllUserInfo',getAllUserInfo);

export default userRouter