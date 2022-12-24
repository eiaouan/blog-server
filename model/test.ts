import {query} from './connect'

const _sql = `select * from users;`
let getResult = async (sql:string)=>{
    let res = await query(sql)
    console.log(res)
    return res;
}

