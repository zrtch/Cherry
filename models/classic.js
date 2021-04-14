import {
  HTTP
}
from '../util/http.js'
//导入之后让Classic继承这个方法，因为HTTP本身就是一个类
class ClassicModel extends HTTP{
  getLatest(sCallback){
    this.requset({
      url:'/classic/latest',
      success:(res)=>{
        sCallback(res)
        // console.log(res.data)
      }
    })
  }
}

export {ClassicModel}