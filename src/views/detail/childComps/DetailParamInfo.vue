<template>
    <div class="param-info" v-if="Object.keys(paramInfo).length!==0">
      <table class="size-info">
        <tr v-for="item in paramInfo.sizes[0]">
          <th v-for="i in item">{{i}}</th>
        </tr>
      </table>

      <table class="param-table">
        <tr v-for="item in paramInfo.infos">
          <th>{{item.key}}</th>
          <th>{{item.value}}</th>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
      name: "DetailParamInfo",
      props:{
        paramInfo:{
          type:Object,
          default(){
            return  {}
          }
        }
      },
      data(){
        return{
        }
      }
    }
</script>

<style scoped>
  .param-info{
    margin-top: 20px;
  }
  table{
    border-top: 2px solid  #f0f0f0;
    border-bottom: 2px solid  #f0f0f0;
    width: 100%;
  }
  .size-info tr th:first-child{
    width: 110px;
  }
  table th{
    padding: 10px 0px;
    text-align: center;
    font-weight: 400;
    border-bottom: 2px solid  #f0f0f0;
  }
  .param-table th:nth-child(1){
    width: 110px;
  }
  .param-table th:nth-child(2){
    color: var(--color-high-text);
    text-align: left;
  }
</style>
