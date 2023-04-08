import { BaseContext } from "koa";
 const errorCatch = async(ctx:BaseContext, next:() => Promise<any>) => {
    try {
      await next();
   } catch (err:any) {
      const { errmsg, errno, status = 500, redirect } = err;
      // @ts-ignore 忽略找不到
      if (err instanceof ValidatedError || err instanceof DbError || err instanceof AuthError || err instanceof RequestError) {
        ctx.status = 200;
        ctx.body = {
          errmsg,
          errno,
        };
        return;
      }
      ctx.status = status;
      if (status === 302 && redirect) {
        console.log(redirect);
        ctx.redirect(redirect);
      }
      if (status === 500) {
        ctx.body = {
          errmsg: err.message,
          errno: 90001,
        };
        // ctx.app.emit('error', err, ctx);
        throw new Error(err)
      }
    }
  }

  export default errorCatch