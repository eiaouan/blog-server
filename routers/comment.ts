
import KoaRouter from 'koa-router'
import { insertComment,getCommentsByAid,getCommentById } from '../control/comment'
const commentRouter=new KoaRouter()

commentRouter.post('/insertComment',insertComment)
commentRouter.get('/getCommentsByAid',getCommentsByAid)
commentRouter.get('/getCommentById',getCommentById)
export default commentRouter