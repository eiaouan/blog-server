import { SECRET } from '../config'
import jsonwebtoken from 'jsonwebtoken' 

export async function getPayload (ctx:any) {
  const token = ctx.header.authorization
  const payload = await Promise.resolve(jsonwebtoken.verify(token.split(' ')[1], SECRET))
  return payload
}
