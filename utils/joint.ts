/**
 * 把对象拼接成sql语句insert into set 的形式
 */

// @ts-nocheck
const joint= function(obj:object){
    let str=''
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if(typeof(obj[prop])=='string'){
                if(str.length>0){
                    str = `${str},${prop} = "${obj[prop]}"`
                }else {
                    str = `${prop} = "${obj[prop]}"`
                }
            }else {
                if(str.length>0){
                    str = `${str},${prop} = ${obj[prop]}`
                }else {
                    str = `${prop} = ${obj[prop]}`
                }
            }
        }
      }
    return str
}



export default joint
