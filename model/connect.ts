// 连接数据库

import mysql from 'mysql'
import { dbConfig } from '../config';
// 连接池

const pool = mysql.createPool(dbConfig);

// 封装发送请求函数

/**
 * 
 * @param sql 要执行的sql语句
 * @returns 正确执行返回查询结果，否则返回错误信息
 */
export const query = function(sql:string){
    return new Promise((resolve: (value:unknown)=>void,reject:(reason?:any)=>void)=>{
        // 建立连接
        pool.getConnection((err:mysql.MysqlError,connection:mysql.PoolConnection)=>{
            if(err){
                reject(err) //not connected
            }
            // 建立查询
            connection.query(sql,(err,results,fild)=>{
                connection.release() // 释放连接
                if(err){
                    reject(err) 
                }else{
                    resolve(results) // 查询正确返回结果
                }
            })
        })
    })
}