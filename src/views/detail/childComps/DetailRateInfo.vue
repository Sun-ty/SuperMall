<template>
  <div class="rate-info" v-if="Object.keys(rate).length!==0">
    <div>
    <div class="title">用户评价<span style="margin-left: 65%">更多 &gt;</span></div>
    <div style="margin-top: 10px;padding-left: 10px">
      <div class="user-information"><img :src="rate.list[0].user.avatar"/><span>{{rate.list[0].user.uname}}</span></div>
      <div>
        <p>{{rate.list[0].content}}</p>
        <p>{{rate.list[0].style}}</p>
        <div class="rate-img">
          <img :src="item" v-for="(item,index) in rate.list[0].images" :key="index">
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailRateInfo",
      props:{
        rate:{
          type:Object,
          default(){
            return {}
          }
        }
      }
    }
</script>

<style scoped>
.rate-info {
  margin-bottom: 30px;

}
.title{
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  padding: 8px;

}
  .user-information img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    margin-right: 10px;
  }
  .rate-img img{
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin-right: 10px;
  }
</style>
