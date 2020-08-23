<template>
    <div id="profile">
      <!--我的资料-->
      <my-information/>
      <!--操作列表-->
      <my-operation/>
    </div>
</template>

<script>
  import MyInformation from "./childComps/MyInformation";
  import MyOperation from "./childComps/MyOperation";

  export default {
      name: "Profile",
    components:{
      MyInformation,
      MyOperation
    }

    }
</script>

<style scoped>

</style>
