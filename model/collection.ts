/**
 * 收藏相关的数据库操作
 */

import { query } from "./connect";

// 新建收藏夹
export const insertColletion = async (uid:number,collect_name:string)=>{
    const _sql = `insert into collect (uid,collect_name) values(${uid},"${collect_name}");`
    return await query(_sql)
}

// 查看用户收藏夹
export const getAllCollection = async (uid:number)=>{
    const _sql=`select * from collect where uid=${uid};`
    return await query(_sql)
}



// 收藏文章
export const insertArticleToCollection = async (aid:number,cid:number)=>{
    const _sql=`insert into collect_article (aid,cid) values(${aid},${cid});`
    return await query(_sql)
}

// 查看收藏夹内文章
export const getCollectedArticles = async(cid:number)=>{
    const _sql=`select * from article_details where aid in (select aid from collect_article where cid=${cid});`
    return await query(_sql)
}

// 取消收藏
export const deleteCollectedArticle = async(aid:number,cid:number)=>{
    const _sql = `delete from collect_article where aid=${aid} and cid=${cid};`
    return await query(_sql)
}

// 删除用户收藏夹,删除相关收藏
export const deleteCollection = async (uid:number,cid:number)=>{
    //判断收藏夹是不是自己的
    let belong = await query(`select * from collect where uid=${uid} and cid=${cid};`)
    if(belong==null) {
        throw new Error('无权限')
    }
    await query(`delete from collect_article where cid=${cid};`)
    const _sql=`delete from collect where cid=${cid};`
    return await query(_sql)
}

export default {
    insertColletion,
    getAllCollection,
    deleteCollection,
    insertArticleToCollection,
    getCollectedArticles,
    deleteCollectedArticle
}