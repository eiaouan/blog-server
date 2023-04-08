/**
 * 处理评论的请求
 */

import commentModel from '../model/comment'
// post
export const insertComment = async (ctx:any)=>{
    let {aid,uid,comment_content,parent_comid=null} = ctx.request.body
    if(aid==undefined || uid == undefined||comment_content==undefined){
        ctx.stauts=400
        ctx.body={
            status:400,
            msg: "输入错误"
        }
    }
    let res = await commentModel.insertComment({aid,uid,comment_content,parent_comid})
    ctx.body = {
        status: 200,
        msg: '输入成功',
    }
}

export const getCommentById = async (ctx:any)=>{
    let {comid} = ctx.query
    if(comid==undefined){
        ctx.body={
            status: 200,
            msg: '评论不存在'
        }
        return
    }
    let res = await commentModel.getCommentById(comid)
    ctx.body={
        status: 200,
        res
    }
}
// get,
export const getCommentsByAid = async (ctx:any)=>{
    let {aid} = ctx.query
    if(aid==undefined){
        ctx.body={
            status: 200,
            msg: '文章不存在'
        }
        return 
    }
    let res = await commentModel.getCommentsByAid(aid)
    ctx.body={
        status: 200,
        res
    }
}