// 查询用户需求

import {query} from './connect'

export const getAllUserInfo = async ()=>{
    const _sql = 'select * from users;'
    let results = await query(_sql);
    return results
}

