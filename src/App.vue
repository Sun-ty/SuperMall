<template>
  <div id="app">
      <MainTabBar></MainTabBar>
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
</style>
