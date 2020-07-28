<template>
<!--  GoodsList 是一个大的框框，框住所有单独商品(GoodsListItem组件)-->
  <div class="goods-list">
<!--    使用循环将每个单独的元素传递给 GoodsListItem组件--每个单独商品 -->
   <GoodsListItem class="goods"  v-for="item in goods.list" :gooditem="item">
   </GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

    export default {
      name: "GoodsList",
      props: ["goods"],
      components:{
        GoodsListItem
      }
    }
</script>

<style scoped>
.goods-list{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}
</style>
