<template>
    <div>
       <nav-bar>
         <div slot="left" @click="backtrack">
           <img src="@/assets/img/common/return.png"  width="45%" height="70%">
         </div>
         <div slot="center" class="title">
           <div v-for="(item,index) in titles" class="title-item" :class="{active:index===currentIndex}" @click="clickIndedx(index)">
             {{item}}
           </div>
         </div>
       </nav-bar>
    </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";

    export default {
      name: "DetailNavBar",
      components:{
        NavBar
      },
      data(){
        return{
          titles:['商品',"评论","参数","推荐"],
          currentIndex:0
        }
      },
      methods:{
        clickIndedx(index){
          this.currentIndex=index;
          //发送数据  监听详情页 导航栏的点击
          this.$emit('titleClick',index);
        },
        backtrack(){
          this.$router.back();
        }
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 15px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
