import {debounce} from "./utils";

/**
 * 混入
 * 那种多个组件内都用到的重复的一模一样的代码 可抽取到mixin中，实现混入 高可用
 * 不仅仅是 mounted生命周期，也可以data数据混入在mixin中实现 ，components也可以等等
 */
export const itemListenerMixin={
  data(){
    return{
      itemImgListener:null  //详情页面 和 首页 都使用了这两个变量，变量最终的值一模一样
    }
  },
  mounted(){//详情页面 和 首页 都使用了mounted生命周期，方法内部一模一样
    const refresh=debounce(this.$refs.wrapper.refresh,500)
    //对监听的事件进行报存   就可以判断用户进入详情页面时 移除首页的图片高度计算加载，转为详情页的推荐数据加载
    this.itemImgListener=()=>{
      refresh() //对滚动条的refresh的方法进行处理，防抖函数，一次性向服务器发送请求
}
    //3.监听item中图片加载完成  加载事件放在created中比较好  监听GoodsListItem发送过来的方法
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}

export const ScrolltoTOP={
  data(){
    return{
      IsShow:false
    }
  },
  methods:{
    backCilck(){
      //拿到scroll组件的better-scroll对象 监听页面的滚动，然后显示或隐藏回到顶部图标
      this.$refs.wrapper.scroll.scrollTo(0,0,500)  //500毫秒回到滚动条0,0 (x,y)坐标 即页面顶部
    }
  }
}
