<template>
  <div id="app">
    <!--对所有的路由页面进行保留组件状态，避免频繁渲染-->
   <keep-alive exclude="Detail">  <!--排除Detail详情组件，因为每次获取商品详情都是一个新的值-->
      <router-view/>
    </keep-alive>

      <MainTabBar/>


  </div>
</template>

<script>

  import MainTabBar from "components/content/mainTabbar/MainTabBar";

  export default {
    name:'app',
    components:{
      MainTabBar
    }
  }

</script>

<style>
/*  导入css */
@import "assets/css/base.css";
@import "assets/css/bootstrap.min.css";
</style>
