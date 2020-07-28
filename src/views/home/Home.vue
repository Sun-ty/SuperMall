<template>
    <div id="home">
        <!--头部导航栏-->
        <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
        <TabControl @tabClick="tabClicks" ref="tabControl1" :title="title" style="padding-bottom:7px;position: absolute;z-index: 2;" v-show="isTabFixed"></TabControl>
      <!--滚动条 封装的组件  better-scroll @pullingUp="loadMore" :pull-up-load="true" -->
      <Scroll class="content" ref="wrapper" :probe-type="3" @scroll="contextScroll" :pull-up-load="true" @pullingUp="loadMore" >
        <!--轮播图-->
        <SlideShow :imageArray="banners" :firstImg="firstImage" ></SlideShow>
        <!--好物推荐-->
        <RecommendView :recommends="recommends"></RecommendView>
        <!--本周流行-->
        <FeatureView/>
        <!--列表导航-->
        <TabControl @tabClick="tabClicks" ref="tabControl" :title="title"></TabControl>
        <!--商品列表-->
        <GoodsList :goods="goods[type]"></GoodsList>
      </Scroll>
      <!--回到顶部-->
      <BackTop @click.native="backCilck" v-show="IsShow"/>
    </div>
</template>

<script>
  import SlideShow from "./childComps/SlideShow";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import {getHomeMultidata,getHomeGoods} from "../../network/home";

  // import BScroll from 'better-scroll'   进行封装 Scroll.vue

  export default {
      name: "Home",
      components:{
        SlideShow,
        RecommendView,
        FeatureView,
        TabControl,
        NavBar,
        GoodsList,
        Scroll,
        BackTop
      },
    data(){
        return{
          // result: null
          banners:[],
          recommends:[],
          firstImage: {url:'',image:''},
          title:['流行','新款','精选'],
          goods:{
            'pop':{page:0,list:[]},  //流行，page记录页数 用户下拉刷新，page加1
            'new':{page:0,list:[]},  //新款
            'sell':{page:0,list:[]}  //精选
          },
          type:'pop',
          IsShow:false,
          isTabFixed:false
        }
    },
  methods:{
    /*
    *  事件监听相关的方法
    * */
    //防抖函数  下面传递500毫秒  每次请求等待500毫秒看后面有没有请求，有就等待一起向服务器发送请求，没有就直接一次性发送现有的请求
    debounce(func,delay){
      let timer=null
      return function(...args){  //...可传递多个参数

        if(timer)
          clearTimeout(timer)
          timer=setTimeout(()=>{
          func.apply(this,args)  //apply方法能劫持另外一个对象的方法，继承另外一个对象的属性,使func的this指定当前方法的参数一

          },delay)
      }

    },
    tabClicks(index){ //接收子组件的参数x
      //console.log(index)
       if (index==0){
         this.type="pop"
       }else if(index==1){
         this.type="new"
       }else if(index==2){
         this.type="sell"
       }
       this.$refs.tabControl1.indexItem=index;
       this.$refs.tabControl.indexItem=index;
    },
    backCilck(){
      //拿到scroll组件的better-scroll对象 监听页面的滚动，然后显示或隐藏回到顶部图标
      //console.log(this.$refs.wrapper.scroll);
      this.$refs.wrapper.scroll.scrollTo(0,0,500)  //500毫秒回到滚动条顶部坐标 即页面顶部
    },
    contextScroll(position){
      //1.判断我们的BackTop是否显示
      this.IsShow = (-position.y)>700;  //y的值为负数 先转换为正数
      //console.log(position.y<-700);   不转换为 正数

      //2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed=(-position.y)>623;
      //console.log(position);

    },
    loadMore(){
      this.getHomeGoods(this.type);
      //请求完一次请求后，执行finishPullUp方法  使之可以再次上拉刷新
      this.$refs.wrapper.finishPullUp();
    },

    /**
     * 网络请求的方法
     */
    getHomeMultidata(){

      getHomeMultidata().then(res=>{
        this.banners=res.data.data.banner.list;
        this.recommends=res.data.data.recommend.list;
        this.firstImage.url=res.data.data.banner.list[0].link;
        this.firstImage.image=res.data.data.banner.list[0].image;
      },err=>{
        console.log(err);
      })
    },
    getHomeGoods(type){ //调用时传递类型
      const pages=this.goods[type].page+1  //请求的页码
      getHomeGoods(type,pages).then(res=>{

        console.log(res); //每次请求前30条数据  一页30条
        /**
         * 直接push内容res.data.data.list，结果是goods[type].list中数组套数组，不在同一个数组
         * ...的作用：将res.data.data.list数组的内容按一个个的元素push进goods[type].list
         */
        this.goods[type].list.push(...res.data.data.list);  //把请求到的30数据赋值给对应类型的数组
        this.goods[type].page+=1; //[type]通过参数的类型判断是进入流行or新款、精选 每次请求加一  不能this.goods.pop.page+1 类型是一个可变的参数

      },err=>{
        console.log(err);
      })
    }
  },
    created() {
      //1.请求多个数据
      this.getHomeMultidata();
      //2.请求商品列表
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

    },
    mounted() {
      const refresh=this.debounce(this.$refs.wrapper.refresh,500)

      //3.监听item中图片加载完成  加载事件放在created中比较好  监听GoodsListItem发送过来的方法
      this.$bus.$on('itemImageLoad',()=>{
        //this.$refs.wrapper.refresh  图片多少张重新加载多少次  服务器压力大
        refresh() //对滚动条的refresh的方法进行处理，防抖函数，一次性向服务器发送请求

      })
    }

  }

</script>

<style scoped>
.home-nav{
  width: 100%;
  background-color: var(--colot-tint);
  color: white;
  padding-bottom: 7px;
  /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动 是用来better-scroll不再影响顶部固定 */
  /*position: fixed;*/
  /*left: 0px;*/
  /*top:0px;*/
  /*z-index: 1;*/

}
  #home{
    height: 100vh;   /* 设置高度为视口高度 */
  }
 .tabControl{
    /*固定定位的一种 当滚动条滚到距离顶部42px时 固定定位
    position: sticky;   使用better-scroll 这个就失效了
    top: 42px; */
   /*top:44px;*/
 }
 .content{
    height: calc(100% - 103px);  /* 设置高度为 home视口高度减去头部NavBar和底部MainTabBar的高度 */
    overflow: hidden; /*   59  44   103*/
    /*margin-top: 44px;*/
 }

</style>
