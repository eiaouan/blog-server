/**
 * 关于表 article atag 的数据库操作
 */

import { query } from "./connect"

export const insertTagToArticle = (aid:number,lid:number)=>{
    const _sql = `insert into article_atag(aid,lid) values(${aid},${lid})`
    let res =  query(_sql)
}

export default {
    insertTagToArticle
}