
import {TheConnectionConfig} from'../types'

export const dbConfig:TheConnectionConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: "blog_db",
    timezone: 'SYSTEM'
}

export const SECRET = "eiaouan_blog" // token加密

export const SECRETKEY = 'eiaouan_blog' // 用户密码加密