/**
 * 控制分类
 */

//import { Sort } from "../types";
import sortModel from "../model/sort";
// post 不存parent_sid
export const insertSort = async (ctx: any)=>{
    // 查找参数
    let param = ctx.request.body
    if(param.sort_name!=null){ // 判断是否为sort类型
        // 判断sort_name 是否已存在
        let hasName = await sortModel.getSortBySortName(param.sort_name);
        console.log(hasName)
        if(hasName){
            ctx.body={
                status: 400,
                msg: "分类已存在"
            }
            return 
        }

        let res;
        try{
            res = await sortModel.insertSort(param)
            ctx.body = {
                status:200,
                res
            }
        }catch(err:any){
            ctx.body = {
                status:500,
                err
            }
            throw new Error(err)
        }
        
        
    }else {
        ctx.body ={
            status: 400,
            msg: "输入错误"
        }
    }
}
//get
export const updateParentSid = async(ctx:any)=>{
    let {parent_sid,sid} = ctx.query
    if(parent_sid==undefined||sid==undefined){
        ctx.body={
            status: 400,
            msg: "输入错误"
        }
        return
    }
    // 查看是否存在
    let parentSort = await sortModel.getSortByID(parent_sid)
    let sonSort = await sortModel.getSortByID(sid)
    if(parentSort==null||sonSort==null){
        ctx.body={
            status: 200,
            msg: "分类不存在"
        }
        return
    }
    // upadte 父子关系
   let res =  await sortModel.updateParentSort(sid,parent_sid)
   ctx.body={
    status: 200,
    msg: '添加成功'
   }
}
// get
export const deleteSort = async(ctx:any)=>{
    let {sid} = ctx.query
    if(sid==undefined){
        ctx.body={
            status: 400,
            msg: '请输入sid'
        }
    }
   let res =  await sortModel.deleteSort(sid)
   let msg ="删除成功"
   if(typeof(res)=='string') msg=res
    ctx.body={
        status: 200,
        msg
    }
}
// 搜索分类 get
export const searchSorts = async (ctx:any)=>{
    let {keyword} = ctx.query
    if(keyword==undefined){
        ctx.body={
            status: 400,
            msg: '输入错误'
        }
    }
    let res = await sortModel.searchSorts(keyword)
    ctx.body={
        status:200,
        res
    }
}

export default {
    insertSort,
    deleteSort,
    updateParentSid,
    searchSorts
}