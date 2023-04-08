// 处理用户请求，响应数据

import {sign} from "jsonwebtoken" // 签证
import { SECRET } from "../config";
import {insertUser} from '../model/user'
import userModel, { getAllUserInfo as getAllUserInfoData,getOneByUsernameAndPassWord} from "../model/user";
import { TheContent } from "../types";
import { dateFormat } from '../utils/dateformat';
import { avatar } from '../default/avatar';
import { getPayload } from "../utils/payload";
export const getAllUserInfo = async (ctx:TheContent)=>{
   // 解析token
   let payload
   try{
      payload = await getPayload(ctx)
   }catch(err:any){
      throw new Error(err)
   }

   let data
   try{
   // @ts-ignore 
       data = await getAllUserInfoData(payload.uid)
   }catch(err:any){
      throw new Error(err)
   }
   let response = {
      data,
      status: 200
   }
   ctx.body = response
}
// post
export const register = async (ctx:any)=>{
   // 获取参数
   let formdata = ctx.request.body
   // 查看参数是否符合要求，不符合抛出错误
   formdata =  Object.assign({breif:'',level: 1,regist_time: dateFormat(),avatar},formdata)
try{
   await insertUser(formdata)

}catch(err:any){
   throw new Error(err)
}
ctx.body = {
   status: 200,
   msg: '注册成功'
}

   // 插入信息
}


export const login = async (ctx:any)=>{
   let {username,password} = ctx.request.body
   let oneuser:object
   if(username==undefined || password==undefined){
      ctx.body={
         state: 400,// bad request
         msg: "无效输入"
      }
      return
   }
   
   try {
      oneuser = await getOneByUsernameAndPassWord(username,password)
      console.log(oneuser)
   }catch(err:any){
      throw new Error(err)
   }
   if(oneuser==undefined){
      ctx.body={
         status: 200,
         msg: "账号或密码错误"
      }
      return
   }
   // token
   let data = {
      Bearer: 'Bearer ',
      // 签发 token，1天
      token: sign(
         {...oneuser}, // 删除RowDataPacket
         SECRET,
         { expiresIn: '1d' }
      )
    }
    ctx.body={
      status: 200,
      data
   }
}

export const getSelfArticles = async (ctx:any)=>{
   const payload = await getPayload(ctx)
   // @ts-ignore 
   let res = await userModel.getSelfArticles(payload.uid)
   ctx.body={
      status:200,
      res
   }
}

export const deleteSelfArticle = async(ctx:any)=>{
   let {aid} = ctx.query
   const payload = await getPayload(ctx)
   // @ts-ignore 
   let res = userModel.deleteSelfArticle(payload.uid,aid)
   ctx.body={
      status:200,
      res
   }
}