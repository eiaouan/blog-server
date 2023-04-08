/**
 * 标签相关内容 包括表 atag article_atag
 */

import {query} from './connect'

type TagInfo= {
    atag_name: string,
    atag_description ?: string
}

export const getTagById = async (lid:number)=>{
    const _sql = `select * from atag where lid = ${lid};`
    let res = await query(_sql)
    if(res!=null)return res[0]
    return null
 }

 export const getTagByTagName = async (atag_name: string)=>{
    const _sql = `select * from atag where atag_name="${atag_name}";`
    let res = await query(_sql)
    if(res!=null)return res[0]
    return null
 }

 export const insertTag = async (tagInfo:TagInfo)=>{
    const _sql=`insert into atag (atag_name,atag_description) values("${tagInfo.atag_name}","${tagInfo.atag_description}");`
    let res = await query(_sql)
    return res
 }

 export const deleteTag = async (lid:number)=>{
    // 判断是否存在外键
    const _sql = `delete from atag where lid=${lid} ;`
    let res = await query(_sql)
    return res
 }

 export const getAllTag = async ()=>{
   return await query('select * from atag;')
 }

 export default{
    insertTag,
    getTagById,
    getTagByTagName,
    deleteTag,
    getAllTag
 }
