import koaRouter from 'koa-router';
import { getAllUserInfo ,register,login,getSelfArticles,deleteSelfArticle} from '../control/user';
let userRouter = new koaRouter()
userRouter.get('/getUserInfo',getAllUserInfo);
userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('/getSelfArticles',getSelfArticles)
userRouter.get('/deleteSelfArticle',deleteSelfArticle)
export default userRouter