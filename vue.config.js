module.exports={
  configureWebpack:{
    resolve:{
      /*起别名  引用时方便*/
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network'
      }
    }}
  // },
  // /*配置手机端测试*/
  // devServer:{
  //   disableHostCheck:false,
  //   host:"192.168.234.1",   //本机ip
  //   port:8080,
  //   https:false,
  //   hotOnly:false,
  //   proxy:null
  // }

}

