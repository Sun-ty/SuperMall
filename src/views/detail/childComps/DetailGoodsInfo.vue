<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="base-info">
  <div style="margin-left: 20px">
        —-—
        {{detailInfo.desc}} <br><br>
        <span style="font-size: 18px;">{{detailInfo.detailImage[0].key}}</span>
      </div>
      <div v-for="item in detailInfo.detailImage[0].list">
        <img :src="item" width="100%" @load="imageLoad">
      </div>
    </div>
</template>

<script>
    export default {
      name: "DetailGoodsInfo",
      props:{
        detailInfo:{
          type:Object
        }
      },
      data(){
        return{
          counter:0,
          imagesLength:0
        }
      },methods:{
        imageLoad(){
          //判断，所有的图片都加载完了，那么进行一次回调就可以了   解决滚动条计算图片高度的问题
          if(++this.counter===this.imagesLength){
            this.$emit('imageLoad')
          }
        }
      },
      watch:{
        //监听数组长度的变化
        detailInfo(){
          //获取图片的个数
          this.imagesLength=this.detailInfo.detailImage[0].list.length;
        }
      }
    }
</script>

<style scoped>
  .base-info{
    margin-top:25px;
    padding-top: 20px;
    border-top: 2px solid #f0f0f0;
  }
</style>
