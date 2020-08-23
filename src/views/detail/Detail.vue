<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <Scroll class="context" ref="wrapper" :probe-type="3" @scroll="contextScroll" >
      <!--轮播图-->
      <detail-swiper :top-images="topImages" :first-images="firstImages"/>
      <!--商品描述-->
      <detail-base-info :goodss="goods"/>
      <!--商品的评价-->
      <detail-rate-info ref="comment" :rate="rate"/>
      <!--商家店铺信息-->
      <detail-shop-info :shop="shop"/>
      <!--商品详情展示-->
      <detail-goods-info @imageLoad="imageRefresh" :detailInfo="detailInfo"/>
      <!--商品参数列表-->
      <detail-param-info ref="params" :paramInfo="paramInfo"/>
      <!--推荐商品-->
      <goods-list :goods="recommends" ref="recommend"/>
    </Scroll>
    <detail-bottom-bar @addToCart="addCart"/>
    <!--回到顶部-->
    <BackTop @click.native="backCilck" v-show="IsShow"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailRateInfo from "./childComps/DetailRateInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import GoodsList from "../../components/content/goods/GoodsList";

  import BackTop from "../../components/content/backTop/BackTop";
  import Scroll from "../../components/common/scroll/Scroll";
  import {getDetail,getRecommend, GoodsInfo, GoodsParam, Shop} from "../../network/detail";
  import {itemListenerMixin,ScrolltoTOP} from "../../common/mixin";

  export default {
      name: "Detail",
      components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailRateInfo,
        DetailBottomBar,
        GoodsList,
        BackTop,
        Scroll
      },
      data(){
        return{
          iid:null,
          res:null,
          topImages:null,
          firstImages:null,
          goods: {},
          shop:{},
          detailInfo:{},
          paramInfo:{},
          rate:{},
          recommends: [],
          themeTopYs:[],
          currentIndex:0
        }
      },
    methods:{
      imageRefresh(){
        //让滚动条一次性加上图片的高度
        this.$refs.wrapper.refresh;

        /**
         * 在图片一次性加载完成后，获取各个组件 的高度
         */
        this.themeTopYs=[]
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)

      },
      titleClick(index){
        console.log(index);         //在100毫秒内跳到 坐标 x:0 y:this.themeTopYs[index]  y一般为负数
        this.$refs.wrapper.scroll.scrollTo(0,-this.themeTopYs[index],100)
      },
      contextScroll(position){
        //1.判断我们的BackTop是否显示
        this.IsShow = (-position.y)>700;  //y的值为负数 先转换为正数

        //2.获取y值
        const positionY=-position.y


        //3.positiony和主题中的值对比
        let length=this.themeTopYs.length

        for(let i=0;i<length;i++){
          if(this.currentIndex!==i &&((i<length-1 && positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1])
            || (i===length-1 && positionY>=this.themeTopYs[i]))){
            this.currentIndex=i
            this.$refs.nav.currentIndex=this.currentIndex;
          }
        }
      },
      addCart(){
        alert("添加成功！")
        //1.获取到购物车需要展示的信息
        const product={}
        product.image=this.topImages[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price=this.goods.realPrice;
        product.iid=this.iid;

        //2.将商品添加到购物车  数据交给vuex保存vuex
        //this.$store.commit("addCart",product);
          this.$store.dispatch("addCart",product);
      }
    } ,
    created() {
        //1.接收GoodsListItem 发送路由跳转的参数id
        this.iid=this.$route.params.id;

        //2.开始请求iid数据
        getDetail(this.iid).then(res=>{
          console.log(res);
          //1.获取顶部的图片轮播数据
          this.topImages=res.data.result.itemInfo.topImages;
          this.firstImages=res.data.result.itemInfo.topImages[0];

          const data=res.data.result;
          //2.获取商品信息    获取的数据复杂 封装成一个对象GoodsInfo，使子组件拿到的数据更加简洁
          this.goods=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)

          //获取商品的评价
          this.rate=data.rate;

          //3.获取商品店铺信息
          this.shop=new Shop(data.shopInfo);

          //4.商品详情信息
          this.detailInfo=data.detailInfo;

          //5.获取商品参数
          this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

          //6.$nextTick  等待所有的子组件加载完成后，获取到他们的offsetTop 组件顶部在滚动条所在的y坐标
          // this.$nextTick(()=>{
          //   this.themeTopYs=[]
          //   this.themeTopYs.push(0);
          //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          //    console.log(this.themeTopYs)
          // })
        })
        //3，请求推荐数据
        getRecommend().then(res=>{
          console.log(res)
          this.recommends=res.data.data;
        })
      },
    mixins:[itemListenerMixin,ScrolltoTOP],
    //使用了mixin混入时首页Home 和详情页Detail 只需要添加mixin属性 就不需要在重复写两遍
    // mounted() {
    //   let newRefresh=this.debounce(this.$refs.wrapper.refresh,500)
    //
    //   //对监听的事件进行报存   就可以判断用户进入详情页面时 移除首页的图片高度计算加载，转为详情页的推荐数据加载
    //   this.itemImgListener=()=>{
    //     newRefresh() //对滚动条的refresh的方法进行处理，防抖函数，一次性向服务器发送请求
    //   }
    //   //3.监听item中图片加载完成  加载事件放在created中比较好  监听GoodsListItem发送过来的方法
    //   this.$bus.$on('itemImageLoad',this.itemImgListener)
    // },
    destroyed() {
      //2.取消全局事件itemImageLoad的监听   因为itemImageLoad监听事件 首页与详情页的推荐都有监听，需要传递两个参数，指定移除的那个函数
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    }
   }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 10;
    height: 100vh;   /* 设置高度为视口高度 */
    background-color: white;
  }
  .context{
    height: calc(100% - 44px - 59px);
    overflow: hidden;
  }
</style>
