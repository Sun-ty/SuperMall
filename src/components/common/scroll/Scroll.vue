<template>
  <!--在wrapper中只能放一个元素,或一个div标签里面包含多个其他标签，必须只能有一个根标签。  在wrapper外面随意-->
  <div class="wrapper" ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
  import BScroll from 'better-scroll'

    export default {
      name: "Scroll",
      props:{
        probeType: {
          type:Number,
          default:0      //probeType默认值为0
        },
        pullUpLoad: {
          type:Boolean,
          default: false //pullUpLoad默认值为false
        }
      },
      data(){
        return{
           scroll:null
        }
      },
      mounted() {
         //1.创建better-scroll    获取元素时最好使用$refs的方式，包证元素的唯一性
         this.scroll=new BScroll(this.$refs.wrapper,{
           click:true,
           probeType:this.probeType,  //0默认不监听页面滚动，在想使用滚动监听时传递参数2或3，减少性能开销
           pullUpLoad:this.pullUpLoad  //默认不开启上拉刷新
         })

        //2.滚动监听
        if(this.probeType===2 || this.probeType===3)
        this.scroll.on('scroll',position=>{
          //开启滚动监听后 并把坐标值position发送给调用者完成具体方法
          this.$emit("scroll",position)
        })

        //3.上拉刷新监听    只能监听一次
        if(this.pullUpLoad){
          this.scroll.on('pullingUp',()=>{
            console.log('-------------------------上拉加载更多-----------------------');
            this.$emit("pullingUp") //发送给调用者完成上拉刷新的具体方法
          })
        }


      },
      methods:{
        finishPullUp(){
          //finishPullUp完成下拉后 再次发起下拉刷新 并且将新的数据展示出来后
          this.scroll.finishPullUp()
        },
        refresh(){
          console.log("-----");
          this.scroll && this.scroll.refresh()
        }
      }
    }
</script>

<style scoped>
  /* 并且还需要为在调用scroll组件时 添加高*/
</style>
