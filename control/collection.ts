/**
 * 收藏夹
 */

import { getPayload } from "../utils/payload";
import collectionModel from '../model/collection'
//get
export const insertColletion = async(ctx:any)=>{
    let {collectName} = ctx.query 
    if(collectName==undefined){
        ctx.body ={
            status: 400,
            msg: '收藏夹不存在'
        }
        return
    }
    let payload = await getPayload(ctx)
    // @ts-ignore
    let res = await collectionModel.insertColletion(payload.uid,collectName)
    ctx.body={
        status: 200,
        res
    }
}

export const getAllCollection = async(ctx:any)=>{
    let payload = await getPayload(ctx)
    //@ts-ignore
    let res = await collectionModel.getAllCollection(payload.uid)
    ctx.body={
        status: 200,
        res
    }
}
// get
export const deleteCollection = async(ctx:any)=>{
    let {cid} = ctx.query
    let payload = await getPayload(ctx)
    //@ts-ignore
    let res = await collectionModel.deleteCollection(payload.uid,cid)
    ctx.body={
        status: 200,
        res
    }
}

// 收藏文章 
export const insertArticleToCollection =async (ctx:any) => {
    let {aid,cid} = ctx.query
    //@ts-ignore
    let res = await collectionModel.insertArticleToCollection(aid,cid)
    ctx.body={
        status: 200,
        res
    }
}
// 取消收藏
export const deleteCollectedArticle = async(ctx:any)=>{
    let {aid,cid} = ctx.query
    //@ts-ignore
    let res = await collectionModel.deleteCollectedArticle(aid,cid)
    ctx.body={
        status: 200,
        res
    }
}

export const getCollectedArticles =async (ctx:any) => {
    let {cid} = ctx.query
    //@ts-ignore
    let res = await collectionModel.getCollectedArticles(cid)
    ctx.body={
        status: 200,
        res
    }
}