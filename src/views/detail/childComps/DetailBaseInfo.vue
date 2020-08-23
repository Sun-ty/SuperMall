<template>
  <!--如果goods为一个空对象就不渲染-->
    <div v-if="Object.keys(goodss).length!==0" class="base-info">
       <div style="margin: 8px 8px;">{{goodss.title}}</div>
       <div class="price">
         <span>{{goodss.newPrice}}</span>
         <span>{{goodss.oldPrice}}</span>
         <span>{{goodss.discount}}</span>
       </div>
       <div class="base-item">
         <span v-for="item in goodss.columns">
            {{item}}
         </span>
       </div>
      <div class="base-delivery">
        <span v-for="(item,index) in goodss.services" v-if="index>0">
            <img :src="item.icon" width="12px" height="12px">{{item.name}}
         </span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
      props:{
        goodss:{
            type: Object,
            default() {
              return {};
            }
          }
      }
    }
</script>

<style scoped>

  .price span{
    margin-left: 13px;
  }
  .price span:first-child{
    font-size: 23px;
    color: var(--color-high-text);
    font-weight: 500;
  }
  .price span:nth-child(2){
    color: gray;
    text-decoration: line-through;
  }
  .price span:last-child{
    border-radius: 15px;
    font-size: 14px;
    background-color: var(--color-high-text);
    color: white;
    padding: 2px 6px;
  }
  .base-item{
    display: flex;
    justify-content:space-between; /* 平等间距排列一行 */
  }
  .base-item span{
    padding: 15px 6px;
    color: gray;
    font-size: 14px;
  }
  .base-delivery{
    display: flex;
    justify-content:space-between;
    margin-bottom: 40px;
  }
  .base-delivery img{
    margin-right: 4px;
    margin-top: -3px;
  }
  .base-delivery span{
     font-size: 12px;
    padding: 10px 5px;
  }
</style>
