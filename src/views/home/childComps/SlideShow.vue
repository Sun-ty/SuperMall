<template>
  <!-- 轮播图-->
  <div id="demo" class="carousel slide" data-ride="carousel">
    <!-- 指示符 -->
    <!-- carousel-indicators为轮播添加一个指示符，就是轮播图底下的一个个小点，轮播的过程可以显示目前是第几张图。-->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="'index'" v-for="(item,index) in imageArray"  v-if="index>=1"></li>
    </ul>

    <!-- 轮播图片  注意下载jQuery-->
    <!-- carousel-inner添加要切换的图片 -->
    <div class="carousel-inner">
      <!-- carousel-item指定每个图片的内容 active：展示这张图-->
      <div class="carousel-item active">
        <a :href="firstImg.url"><img :src="firstImg.image" height="25%" width="100%" /></a>
        <!-- carousel-caption 来设置轮播图片的描述文本-->
        <div class="carousel-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div class="carousel-item" v-for="(item,index) in imageArray"  v-if="index>=1">
        <a :href="item.link"><img :src="item.image" height="25%" width="100%" /></a>
        <!-- carousel-caption 来设置轮播图片的描述文本-->
        <div class="carousel-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
    <!-- carousel-control-prev添加左侧的按钮，点击会返回上一张。-->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <!-- carousel-control-next添加右侧按钮，点击会切换到下一张。-->
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "SlideShow",
        props:["imageArray","firstImg"],
        data(){
          return{
            isLoad:false
          }
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>
