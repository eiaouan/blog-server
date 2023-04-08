/**
 * 评论的数据库操作
 */
import joint from "../utils/joint"
import { query } from "./connect"

type Comment = {
    aid: number,
    uid: number,
    comment_content: string,
    parent_comid?: number,
    publish_time?: string
}

export const insertComment = async (commentInfo:Comment)=>{
    const _sql = `insert into comment set ${joint(commentInfo)} ,publish_time=NOW();`
    return await query(_sql)
}

export const getCommentById = async (comid:number)=>{
    const _sql = `select * from comment where comid=${comid};`
    let res = await  query(_sql)
    if(res!=null) return res[0]
}

export const getCommentsByAid = async(aid:number)=>{
    const _sql=`select * from comment_details where aid=${aid};`
    return await query(_sql)
}


export default {
    insertComment,
    getCommentsByAid,
    getCommentById
}