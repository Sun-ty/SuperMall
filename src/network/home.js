import {request} from "./request";

//集中管理所有home请求   为网络请求发送了参数
export function getHomeMultidata(){
  //获取轮播图和好物推荐
  return request({  //向request传递一个对象
    url:'/home/multidata'
  })
}
//获取首页的商品 data数据
export function getHomeGoods(type,page){
  return request({  //向request传递一个对象
    url:"/home/data",
    params:{
      type,   //简写方式  向后端传递参数
      page
    }
  })
}
