//配置选项
//const：声明一个固定不变的常量的话，就应该使用const,这个配置是不允许其他代码改动
//一般我们加了export关键字之后，那么config就可以在其他模块导入
const config = {
  api_base_url:'http://bl.talelin.com/v1',
  appkey: "RdshydjBvcYZhMZC"
}

export {config}
// export let fun1 = function(){

// }

// export {config,fun1}  //另一种写法，一共两种形式
