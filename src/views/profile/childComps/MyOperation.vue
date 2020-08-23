<template>
    <div class="operation">
      <ul>
        <li><img src="@/assets/img/my/xiaoxi.png"><span>新消息 <span class="badge badge-danger" style="width: 28px">99+</span></span>&gt;</li>
        <li><img src="@/assets/img/my/fahuotixing.png"><span>待发货</span>&gt;</li>
        <li><img src="@/assets/img/my/guanzhu.png"><span>我的关注</span>&gt;</li>
        <li><img src="@/assets/img/my/shoucang.png"><span>我的收藏</span>&gt;</li>
        <li><img src="@/assets/img/my/zuji.png"><span>我的足迹 </span>&gt;</li>
        <li><img src="@/assets/img/my/pingjia.png"><span>我的评价</span>&gt;</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "MyOperation"
    }
</script>

<style scoped>
  .operation{
    margin-top: 20px;
  }
  ul{
    margin: 0;
    padding: 0;
    width: 100%;
  }
  ul li{
    list-style: none;
    margin-left: 10px;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  img{
    width: 28px;
    height: 28px;
    margin-right: 25px;

  }
  span{
    display: inline-block;
    /*width: 270px;*/
    width: 75%;
  }
</style>
