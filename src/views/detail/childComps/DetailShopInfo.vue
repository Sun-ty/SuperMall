<template>
  <div v-if="Object.keys(shop).length!==0" style="border-top: 2px solid #f0f0f0">
<!--true红色   false绿色-->
    <div class="shop-img">
      <img :src="shop.logo" width="65px" height="65px"><span style="margin-right: 100px">{{shop.name}}</span><button class="btn btn-outline-secondary btn-sm">进店逛逛</button>
    </div>
    <div class="shop-information">
       <div class="shop-count">
         <div>
           <h4>{{shop.sells}}</h4>
           <span>总销量</span>
         </div>
         <div>
           <h4>{{shop.goodsCount}}</h4>
           <span>全部宝贝</span>
         </div>
       </div>
       <div class="shop-score">
         <div class="score-item" v-for="item in shop.score" style="margin:0px 0px 10px 20px">
           {{item.name}}
           <div style="margin: 0px 10px" class="score" :class="item.isBetter?'redText':'greenText'" >
             <span>{{item.score}}</span>
           </div>
             <span style="margin: 0px 2px;background-color: red;color: white;width:20px;height:20px;border-radius: 3px;font-size: 14px" v-if="item.isBetter">高</span>
             <span style="margin: 0px 2px;background-color: green;color: white;width:20px;height:20px;border-radius: 3px;font-size: 14px" v-else>低</span>
         </div>
       </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
        props:{
          shop:{
            type:Object,
            default(){
              return {}
            }
          }
        },
      data(){
          return{
            grade:true
          }
      }
    }
</script>

<style scoped>
  .shop-img{
    padding: 30px 10px;
  }
  .shop-img img{
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    margin-right: 15px;
  }
  .shop-information{
    display: flex;
  }
  .shop-count{
    border-right: 2px solid #f0f0f0;
    width: 200px;
    display: flex;
    justify-content:space-around;
    text-align: center;
  }
  .shop-score{
    width: 200px;
  }
  .score-item{
    display: flex;
    text-align: center;
  }
  .score span:first-child{
    display: inline-block;
    width: 45px;
    text-align: left;

  }
  .redText{
    color: red;
  }
  .greenText{
    color: green;
  }
</style>
