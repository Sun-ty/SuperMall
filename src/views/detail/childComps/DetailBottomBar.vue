<template>
    <div class="bottom-bar">
       <div>
         <img src="@/assets/img/detail/kefu.png"/>
         <p>客服</p>
       </div>
      <div>
        <img src="@/assets/img/detail/dianpu.png"/>
        <p>店铺</p>
      </div>
      <div>
        <img src="@/assets/img/common/shoucang2.png"/>
        <p>收藏</p>
      </div>
      <p style="width: 30%;background: #ffce07" @click="addToCart">加入购物车</p>
      <p style=" width: 20%;background: var(--colot-tint);color: white">购买</p>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
      methods:{
        addToCart(){
          this.$emit("addToCart");
        }
      }
    }
</script>

<style scoped>
  .bottom-bar{
    height: 59px;
    width: 100%;
    background: #fff;
    position: fixed;
    left: 0px;
    right: 0;
    bottom: 0;
  }
  .bottom-bar img{
    width: 25px;
    height:25px;
    margin: 3px;
  }
  .bottom-bar div{
    width: 16.6%;
    display: inline-block;
    text-align: center;
  }
  .bottom-bar>p{
    display: inline-block;
    height: 60px;
    position: relative;
    top: -10px;
    text-align: center;
    padding-top: 22px;
  }

</style>
