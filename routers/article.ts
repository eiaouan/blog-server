/**
 * 文章/博客相关接口
 */
import {insertArticle,getArticles,publishArticle,getArticleList,getArticleById} from '../control/article'
import KoaRouter from 'koa-router'

const articleRouter = new KoaRouter()

articleRouter.post('/insertArticle',insertArticle) 
articleRouter.get('/getArticles',getArticles)
articleRouter.get('/publishArticle',publishArticle)
articleRouter.get('/getArticleList',getArticleList)
articleRouter.get('/getArticleById',getArticleById)
// articleRouter.get('/deleteArticle')
export default articleRouter