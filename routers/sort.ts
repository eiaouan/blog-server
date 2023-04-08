/**
 * author: yxj
 * sort主体的相关接口
 */

import koaRouter from 'koa-router'
import { insertSort ,updateParentSid,deleteSort,searchSorts} from '../control/sort'
const sortRouter = new koaRouter()

sortRouter.post('/insertSort',insertSort)
sortRouter.get('/updateParentSid',updateParentSid)
sortRouter.get('/deleteSort',deleteSort)
sortRouter.get('/searchSorts',searchSorts)




export default sortRouter