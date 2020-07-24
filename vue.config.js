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
    }
  }
}

