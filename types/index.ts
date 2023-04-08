import Koa from 'koa';
export type TheContent = Koa.BaseContext

import mysql from 'mysql'
export type TheConnectionConfig = mysql.ConnectionConfig

export interface Sort {
    type: 'sort',
    sid: number,
    sort_name: string,
    sort_description?: string,
    parent_id?: number
}
