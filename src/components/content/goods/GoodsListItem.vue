<template>
    <div class="goods-item" @click="itemClick">
        <img :src="showImage" @load="ImgLoad">
      <div>
        <p>{{gooditem.title}}</p>
        <div class="spa-text">
          <span class="price" style="color: var(--color-high-text)">{{'￥'+gooditem.price}}</span>
          <img style="width: 12%;height: 12%;position: relative;left: 12px;top: -2px" src="@/assets/img/common/shoucang2.png"/>
          <span class="collect">{{gooditem.cfav}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "GoodsListItem",
      props:["gooditem"],
      methods:{
        ImgLoad(){
          /**
           *  better-scroll计算整体高度时并没有加上图片的高度(加图实际高度4000，计算为2000)，导致往下翻阅的时候翻到一般刷不动了，页面加载时加上refresh来计算加上图片高度的总高度
           *  2.如何拿到Scroll对象呢？ 只有home能拿到，中间隔了一个GoodsList  非父子组件 一个个传递效率低，
           *    使用 "事件总线"(管理事件)main.js使用原型 创建了一个Vue实例作为事件总线 $bus 与Vuex类似(管理组件状态) 当然也可以使用vuex解决传值
           */

            this.$bus.$emit('itemImageLoad'); //发送方法
        },
        itemClick(){
          this.$router.push('/detail/'+this.gooditem.iid);
        }
      },
      computed:{
        showImage(){
          return this.gooditem.image||this.gooditem.show.img
        }
      }
    }
</script>

<style scoped>
  .goods-item{
    margin:8px 8px;
    width: 45%;
  }
  img:first-child{
    width: 100%;
    height: 80%;
    border-radius: 7px;
  }
  p{
    margin-top: 8px;
    height: 30px;
    margin-bottom: 0px;
    /*以...省略号替代多余的文字  对p标签管用*/
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;

  }
  .spa-text{
    margin: 0px;
    padding: 0px;
    text-align: center;
  }
  span{
    margin-left: 15px;

  }

</style>
