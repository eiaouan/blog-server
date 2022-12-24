// 处理用户请求，响应数据


import { getAllUserInfo as getAllUserInfoData } from "../model/user";
import { TheContent } from "../types";
export const getAllUserInfo = async (ctx:TheContent)=>{
   let data = await getAllUserInfoData()
   let response = {
      data,
      status: 200
   }
   ctx.body = response
}