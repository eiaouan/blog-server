import { TheContent } from "../types";

export default async (ctx:TheContent,next:() => Promise<any>) => {
    return await next().catch((err) => {
      if (err.status === 401) {
        ctx.body = 'Protected resource, use Authorization header to get access\n';
      } else {
        throw err
      }
    })
  }