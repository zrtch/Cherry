// 把api调用封装成一个类。es6的class
import {config} from '../config.js'

const tips = {
  1:'抱歉，出现了一个错误',
  1005:'appkey无效',
  3000:'期刊不存在'
}

class HTTP{
  //定义一个方法，可以把方法视作函数。如果是类下面的，通常叫做方法
    requset(params){
      if(!params.method){
        params.method = 'GET'
      }
      wx.request({
        url: config.api_base_url + params.url,
        method:params.method,
        data:params.data,
        header:{
          'content-type':'application/json',
           'appkey':config.appkey
        },
        success:(res)=>{ 
          //来依据http状态码来判断的
          let code = res.statusCode.toString()
          if(code.startsWith('2')){
            params.success &&  params.success(res.data)
          }else{ //服务器异常
            let error_code = res.data.error_code
            this._show_error(error_code)
          }
        },
        fail:(err)=>{ //api调用失败  比如出现断网情况
          this._show_error(1)
        }
      })
    }

    _show_error(error_code){ //自定义的错误私有方法
      wx.showToast({
        title:tips[error_code],
        icon:'none',
        duration:2000
      })
    }
}
export {HTTP}
