<template>
    <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image"/>
          <div style="color: gray">{{item.title}}</div>
        </a>

      </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:["recommends"]
    }
</script>

<style scoped>
    .recommend{
      display: flex;
     /* width: 100%;*/
      text-align: center;
      font-size: 15px;
      margin: 13px 0px;
      padding-bottom: 18px;
      border-bottom: 8px solid #eee;
    }
    .recommend-item{
      flex: 1;
    }
  .recommend-item img{
    width:80%;
    height: 80%;
    padding-bottom: 5px;
  }
</style>
