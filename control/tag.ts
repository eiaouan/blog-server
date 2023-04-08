/**
 * 标签管理
 */

import tagModel from '../model/tag'

//get
export const getTagById = async (ctx:any)=>{
    let {lid} = ctx.query
    if(lid==undefined){
        ctx.status=400
        ctx.body={
            status:400,
            msg: "输入错误"
        }
        return 
    }
    let res =  await tagModel.getTagById(lid)
    ctx.body={
        status:200,
        res
    }
}
//get
export const getTagByTagName =async (ctx:any) => {
    let {tagName} = ctx.query
    if(tagName==undefined){
        ctx.status=400
        ctx.body={
            status: 400,
            msg:"输入错误"
        }
        return 
    }
    let res = await tagModel.getTagByTagName(tagName)
    ctx.body={
        status:200,
        res
    }
}

// post
export const insertTag = async (ctx:any)=>{
    let {atag_name,atag_description} = ctx.request.body
    // 处理输入
    if(atag_name==undefined){
        ctx.status = 400
        ctx.body={
            status: 400,
            msg: '输入错误'
        }
        return 
    }
    // 判断是否唯一
    let hasTag = await tagModel.getTagByTagName(atag_name)
    if(hasTag!=null){ // 已存在tag
        ctx.body ={
            status:200,
            msg: 'tag已存在'
        }
        return
    }
    // 执行
    let res = await tagModel.insertTag({atag_name,atag_description})
    ctx.body={
        status: 200,
        res
    }
}
//get
export const deleteTag = async(ctx:any)=>{
    let {lid} = ctx.query
    if(lid==undefined){
        ctx.status=400
        ctx.body={
            status:400,
            msg:"输入错误"
        }
        return
    }
    let res = await tagModel.deleteTag(lid)
    
    ctx.body={
        status:200,
        msg: "删除成功"
    }
}

export const getAllTag = async(ctx:any)=>{
    let res = await tagModel.getAllTag()
    ctx.body ={
        status:200,
        res
    }
}