import {request} from "./request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

/**
 * 商品推荐的数据
 */
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}


/**
 * 商品描述信息
 */
export class GoodsInfo{
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title            //获取商品的标题
    this.desc=itemInfo.desc              //商品的描述
    this.newPrice=itemInfo.price         //商品新价格  带货币符 ￥
    this.oldPrice=itemInfo.oldPrice      //商品旧价格  带货币符 ￥
    this.discount=itemInfo.discountDesc  //折扣
    this.columns=columns                 //数组
    this.services=services               //退换货类型
    this.realPrice=itemInfo.lowNowPrice  //商品现价    不带货币符 用于购物车中计算价格
  }
}

/**
 * 商品店铺信息
 */
export class Shop {
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;         //商家logo
    this.name=shopInfo.name;             //商家店名
    this.fans=shopInfo.cFans;            //商家粉丝
    this.sells=shopInfo.cSells;          //商家售卖数量
    this.score=shopInfo.score;           //商家分数
    this.goodsCount=shopInfo.cGoods;     //商品数量
  }
}

/**
 * 商品参数
 */
export class GoodsParam{
  constructor(info,rule) {
    //image可能没有值，(某些商品有值，某些没有)
   this.image=info.images?info.images[0]:'';
   this.infos=info.set;                  //商品参数 数组 尺寸、材质等等
   this.sizes=rule.tables;
  }
}
