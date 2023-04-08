/**
 * 标签管理
 */

import koaRouter from 'koa-router'
import { insertTag,getTagById,getTagByTagName ,deleteTag,getAllTag} from '../control/tag'
const tagRouter = new koaRouter()
tagRouter.post('/insertTag',insertTag)
tagRouter.get('/getTagById',getTagById)
tagRouter.get('/getTagByTagName',getTagByTagName)
tagRouter.get('/deleteTag',deleteTag)
tagRouter.get('/getAlltag',getAllTag)


export default tagRouter