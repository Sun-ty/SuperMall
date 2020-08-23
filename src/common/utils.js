//防抖函数  下面传递500毫秒  每次请求等待500毫秒看后面有没有图片请求，有就等待一起向服务器发送请求，没有就直接一次性发送现有的请求
export function debounce(func,delay){
  let timer=null
  return function(...args){  //...可传递多个参数

    if(timer)
      clearTimeout(timer)
    timer=setTimeout(()=>{
      func.apply(this,args)  //apply方法能劫持另外一个对象的方法，继承另外一个对象的属性,使func的this指定当前方法

    },delay)
  }
}
