// 加密

import { SECRETKEY } from "../config";
import { createHash} from "crypto";

function md5(content:string) {
    let md5 = createHash('md5')
    return md5.update(content).digest('hex') // 把输出编程16进制的格式
}

// 加密函数
export  function genPassword(password:string) {
    const str = `password=${password}&key=${SECRETKEY}` // 拼接方式是自定的，只要包含密匙即可
    return md5(str)
}


