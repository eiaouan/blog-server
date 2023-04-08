// 查询用户需求

import {query} from './connect'
import { genPassword } from '../utils/encrypt';
export const getAllUserInfo = async (uid:number)=>{
    const _sql = `select uid,username,breif,sex,level,regist_time,avatar from users where uid=${uid};`
    let results = await query(_sql);
    return results
}

export type RegisterInfo = {
    uid: string;
    username: string;
    password: string;
    breif: string;
    sex: string;
    level: number;
    regist_time: string;
    avatar: string;
}

export const insertUser = async (registerInfo:RegisterInfo)=>{
    registerInfo.password = genPassword(registerInfo.password)
    const _sql = `insert into users(username,password,breif,sex,level,regist_time,avatar)
                 values("${registerInfo.username}","${registerInfo.password}","${registerInfo.breif}","${registerInfo.sex}",${registerInfo.level},NOW(),"${registerInfo.avatar}");`
    console.log(_sql)         
    let execResult = await query(_sql)
    return execResult
}


/**
 insert into users(username,password,breif,sex,level,avatar)
                 values("admin","123456","这个人很懒什么都没写","男",1,"....");
 */

export const getOneByUsernameAndPassWord = async (username:string,password:string)=>{
    password = genPassword(password)
    const _sql = `select uid,username  from users where username="${username}" and password="${password}";`
    let res
    try {
      res=  await query(_sql) 
    }catch(err:any){
        throw new Error(err)
    }
    if(res!=null) res=res[0]
    return res
}

// 查找自己的写的文章

export const getSelfArticles = async (uid:number)=>{
    const _sql = `select * from article_details where uid=${uid};`
    return await query(_sql)
}

// 删除自己写的文章

export const deleteSelfArticle = async(uid:number,aid:number)=>{
    const _sql = `delete from Article where uid=${uid} and aid=${aid};`
    return await query(_sql)
}

export default {
    insertUser,
    getOneByUsernameAndPassWord,
    getSelfArticles,
    deleteSelfArticle
}

