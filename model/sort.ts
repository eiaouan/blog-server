/**
 * 文章分类的数据库操作
 */

import { Sort } from "../types"
import {query} from './connect'
export const insertSort = async (sort: Sort)=>{
    sort = Object.assign({sort_descript:'',parent_sid:0},sort) // 添加默认值
    const _sql = `insert into sort (sid,sort_name,sort_description)
                    values(0,"${sort.sort_name}","${sort.sort_description}");`
    let res
    try{
        await query(_sql)
        res =  await query(`select LAST_INSERT_ID()`)
        if(res!=null)res=res[0]
    }catch(err:any){
        throw  Error(err)
    }
    res = Object.assign(sort,res)
    return res
}

// 通过sort_name 查找sort
export const getSortBySortName = async (sort_name: string)=>{
    const _sql = `select * from sort where sort_name="${sort_name}"`;
    let res = await query(_sql);
    // @ts-ignore
    if(res!=null)return res[0]
    else  return null
}

// 添加分类关系

export const updateParentSort = async(sid:number,parent_sid:number)=>{
    const _sql = `update sort set parent_sid=${parent_sid} where sid=${sid};` // 回复别人
    let res = await query(_sql) // Okpacket
    return res
}


// 删除分类，在有文章时不能删除
export const deleteSort = async(sid:number)=>{
    const _sql = `delete from sort where sid=${sid}`

    let res 
    try {
      res= await query(_sql)
    }catch(err:any){ // 当其因为外键不能删除
        return "存在关联分类或文章"
    }
    return res
}

// 查找分类
export const getSortByID = async (sid:number)=>{
    const _sql = `select * from sort where sid=${sid};` // 回复别人
    let res = await query(_sql)
    return res
}


// 搜索分类
export const searchSorts = async (keyword: string)=>{
    const _sql = `select * from sort where sort_name like "%${keyword}%" or sort_description like "%${keyword}%";`
    let res = await query(_sql)
    return res
}

export default{
    insertSort,
    updateParentSort,
    deleteSort,
    getSortByID,
    searchSorts,
    getSortBySortName
}
