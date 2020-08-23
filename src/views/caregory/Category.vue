<template>
    <Scroll class="item">
      <img src="@/assets/img/common/classify.jpg" width="100%" height="100%">
    </Scroll>
</template>

<script>
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
      name: "Home",
    components:{
      Scroll
    },
      data(){
        return{
          scroll:null
        }
      }
    }
</script>

<style scoped>
.item{
  height: 100vh;
  overflow: hidden;
}
</style>
