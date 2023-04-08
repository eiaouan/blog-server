import KoaRouter from 'koa-router'
import { insertColletion,getAllCollection,insertArticleToCollection,deleteCollection,getCollectedArticles,deleteCollectedArticle } from '../control/collection'
const collectionRouter = new KoaRouter()
collectionRouter.get('/insertCollection',insertColletion)
collectionRouter.get('/getAllCollection',getAllCollection)
collectionRouter.get('/deleteCollection',deleteCollection)
collectionRouter.get('/insertArticleToCollection',insertArticleToCollection)
collectionRouter.get('/getCollectedArticles',getCollectedArticles)
collectionRouter.get('/deleteCollectedArticle',deleteCollectedArticle)
export default collectionRouter
