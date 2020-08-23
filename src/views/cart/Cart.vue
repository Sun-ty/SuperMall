<template>
    <div class="cart">
        <!-- 顶部导航 -->
        <nav-bar class="cart-nav">
          <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <!--商品列表-->
        <scroll class="context">
          <cart-list/>
        </scroll>
        <!--底部计算-->
        <cart-bottom-bar/>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import Scroll from "../../components/common/scroll/Scroll";

  // mapGetters导入所有vuex中的getters方法 可指定要使用的方法  不再需要this.$store.getters
  import {mapGetters} from 'vuex'

  export default {
      name: "card",
      components:{
        NavBar,
        CartList,
        CartBottomBar,
        Scroll
      },
      computed:{
        ...mapGetters(['cartLength'])
      }
    }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .cart-nav{
    width: 100%;
    background-color: var(--colot-tint);
    color: white;
    padding-bottom: 7px;
  }
  .context{
    height: calc(100% - 44px - 65px - 40px);
    overflow: hidden;
  }
</style>
