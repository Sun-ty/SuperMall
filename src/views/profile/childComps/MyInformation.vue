<template>
  <div style="background-color:var(--colot-tint) ">
    <div class="Set-the-data">
      <img src="@/assets/img/my/shezhi.png" width="20px" height="20px">设置
    </div>
    <p style="font-size: 20px;font-weight:bold;text-align: center">我的</p>
    <hr>
    <div>
      <img src="@/assets/img/my/touxiang.png" width="80px" height="80px" style="margin: 5px 15px">
      <span style="display: inline-block;font-size: 18px; position: relative;top:12px">
        *小仙女*
        <br>
        186****0409
        <span class="update">
          <div>
               <img src="@/assets/img/my/xiugai.png" width="15px" height="15px">修改
          </div>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyInformation",

    }
</script>

<style scoped>
  .Set-the-data{
    height:40px;
    text-align: right;
    padding: 10px 10px;
  }
  .update{
    background-color: white;
    font-size: 13px;
    display: inline-block;
    padding: 1px 5px;
    border-radius: 10px;
    opacity: 0.7;
    margin-left:7px;
  }
</style>
