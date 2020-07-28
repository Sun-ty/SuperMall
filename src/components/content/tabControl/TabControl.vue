<template>
  <!--由于此导航栏再不同组件内部使用时 样式都没有发生改变 仅仅是文字不一样 为了方便不使用插槽 传递文字过来就行-->
    <div class="tab-control">
       <div v-for="(item,index) in title" class="tab-control-item" :class="{activeClass:index===indexItem}" @click="tabClick(index)">
          <span>{{item}}</span>
       </div>
    </div>
</template>

<script>
    export default {
      name: "TabControl",
      props:["title"],
      data(){
        return{
          indexItem:0
        }
      },
      methods:{
        tabClick(index){
          this.indexItem=index;
          // console.log(index);
          this.$emit("tabClick",index) //向父组件Home传值
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    background-color: white;
    width: 100%;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .activeClass{
    color: var(--color-high-text);
  }
  .activeClass span{
    border-bottom: 3px solid var(--colot-tint);
    padding: 8px 6px;
  }
</style>
