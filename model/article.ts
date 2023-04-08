/**
 * 文章/博客的数据库操作
 */

import joint from "../utils/joint"
import { query } from "./connect"

type Article={
    uid:number,
    sid:number,
    title: string,
    content: string,
    createTime?: string,
    updateTime?: string,
    cover?:string,
    articleSummary?: string,
    publishState?: string
}


export const insertArticle = async (articleInfo:Article)=>{
    // 凭借成sql语句
    /**
     * INSERT INTO <表名>
        SET <列名1> = <值1>,
        <列名2> = <值2>,
     */
    // let clounms = Object.keys(articleInfo)
    // let values = Object.values(articleInfo)

    const _sql = `insert into article set ${joint(articleInfo)}`
    let res = await query(_sql)
    return res;
}

export const  getArticleById =async (aid:number) => {
    const _sql = `select * from article where aid=${aid}`
    let rows  = await query(_sql)
    if(rows!=null)return rows[0]
    return null
}

/**
 * 
 * @param aid 修改的文章id
 * @param cloumn 修改的内容
 * @param newValue 修改后的值
 */
export const updateArticle = async (aid:number,cloumn:string,newValue:any)=>{
    const _sql = `update article set ${joint({[cloumn]:newValue})} where aid=${aid}`
    console.log(_sql)
    let res =  await query(_sql)
     return res
}
/**
 * 
 * @param limit 限制条数 default 10
 * @param offset 偏移量 default 0
 * @param cloumn 约束字段 
 * @param value 字段值
 */
export const getArticles = (limit:number=10,offset:number=0, cloumn?:string,value?:any)=>{
    let _sql:string
    if(cloumn){
         _sql =`select * from article where publish_state='已发布' and ${joint({[cloumn]:value})}  limit ${limit} offset ${offset}`
    }else {
        _sql=`select * from article where publish_state='已发布'  limit ${limit} offset ${offset}`
    }
    let res =  query(_sql)
    return res
}

/**
 * 
 * @param limit 限制条数 default 10
 * @param offset 偏移量 default 0
 * @param cloumn 约束字段
 * @param value 字段值
 */
export const getArticleList = (limit:number=10,offset:number=0, cloumn?:string,value?:any)=>{
    let _sql:string
    if(cloumn){
         _sql =`select * from article_details where ${joint({[cloumn]:value})}  limit ${limit} offset ${offset}`
    }else {
        _sql=`select * from article_details  limit ${limit} offset ${offset}`
    }
    let res =  query(_sql)
    return res
}



export default {
    insertArticle,
    getArticleById,
    updateArticle,
    getArticles,
    getArticleList
}