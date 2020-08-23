<template>
  <div>
   <div :class="isChecked.checked?'checkImg':'checkButton'" @click="clickImg" >
    </div>
  </div>
</template>

<script>
    export default {
      name: "CheckButton",
      /**
       * get小知识：
       * 父子组件传值时，父组件传递的参数，数组和对象，子组件接受之后可以直接进行修改，并且会传递给父组件相应的值也会修改。
       * 如果传递的值是字符串，直接修改会报错。
       * 不推荐子组件直接修改父组件中的参数，避免这个参数多个子组件引用，无法找到造成数据不正常的原因
       */
      props: {
        isChecked:{
          type:Object,
          default() {
            return {};
          }
        }
      },
      data(){
          return{
            //IsShowImg:false,
            //IsShowRadio:false
          }
      },
      methods:{
        clickImg(){
          //this.IsShowImg=!this.IsShowImg     //记录是否选中
          this.isChecked.checked=!this.isChecked.checked     //记录是否选中
          //1.全选操作
          this.$emit("checkAll",this.isChecked.checked);

          //this.IsShowRadio=!this.IsShowRadio //记录样式
        }
      }
    }
</script>

<style scoped>
.checkButton{
  background-color: white;
  border-radius: 50%;
  border:2px solid #d6d8d9;
  width:25px;
  height:25px;
}
.checkImg{
  background-image: url("../../../assets/img/tabbar/gougou-.png");
  background-repeat: no-repeat;
  background-size: 25px;
  width:25px;
  height:25px;
}

</style>
