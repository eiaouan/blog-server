// 控制article

import articleModel from '../model/article'
import articleAtagModel from '../model/articleAtag' // article_atag表
 // 默认头像连接 https://i.328888.xyz/2022/12/26/Dvu8a.png
export const  insertArticle = async (ctx:any)=>{
    let articleInfo = ctx.request.body
    articleInfo = Object.assign({cover:"https://i.328888.xyz/2022/12/26/Dvu8a.png",publish_state:'未发布'},articleInfo)
    let res = await articleModel.insertArticle(articleInfo)
    ctx.body={
        status: 200,
        msg: "添加成功"
    }
}
// get
export const getArticles =async (ctx:any) => {
    let {limit,offset,cloumn,value} = ctx.query // 获取参数
    let res = await articleModel.getArticles(limit,offset,cloumn,value)
    ctx.body = {
        status: 200,
        res
    }
}

// 发布博客 get
export const publishArticle = async (ctx:any)=>{
    let {aid} = ctx.query
    if(aid == undefined){
        ctx.status = 400
        ctx.body = {
            status:400,
            msg: "输入错误"
        }
        return
    }
    let res = await articleModel.updateArticle(aid,'publish_state','已发布')
    ctx.body={
        status: 200,
        msg: "修改成功"
    }
}

// 修改分类
export const updateArticleSort = async (ctx:any)=>{
    let {aid ,sid} = ctx.query
    if(aid == undefined||sid==undefined){
        ctx.status = 400
        ctx.body = {
            status:400,
            msg: "输入错误"
        }
        return
    }
    let res = await articleModel.updateArticle(aid,'sid',sid)
    ctx.body={
        status: 200,
        msg: "修改成功"
    }
}

// 给文章添加标签 get 一个个加
export const addTagToArticle = async (ctx:any)=>{
    let {aid,lid} = ctx.lid
    let res = await articleAtagModel.insertTagToArticle(aid,lid)
    ctx.body={
        status:200,
        msg: "sucess"
    }
}

// 文章列表信息
// get
export const getArticleList =async (ctx:any) => {
    let {limit,offset,cloumn,value} = ctx.query // 获取参数
    let res = await articleModel.getArticleList(limit,offset,cloumn,value)
    ctx.body = {
        status: 200,
        res
    }
}

// 获取文章详情

export const getArticleById = async(ctx:any)=>{
    let {aid} = ctx.query
    let res = await articleModel.getArticleById(aid)
    if(res==null){
        ctx.body={
            msg: '文章不存在',
            status:200
        }
    }else {
        ctx.body={
            status:200,
            res
        }
    }
}