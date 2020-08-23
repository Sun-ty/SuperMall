<template>
    <div class="bottom-bar">
      <check-button class="check-button"  @checkAll="checkall"  :class="isSelectAll?'checkImgs':'check-button'"/>
      <span>全选</span>
      <span class="calculate-price">合计： {{"￥"+totalPrice}}</span>
      <span class="aggregate">去计算({{count}})</span>
    </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'

    export default {
      name: "CartBottomBar",
      components:{
        CheckButton
      },
      data(){
        return{
          isShow:false,
          isSelectAll:false,
          record:[]
        }
      },
      methods:{
        checkall(isTrue){
          this.isSelectAll= !this.isSelectAll;
          this.record=[];
          this.$store.state.cartList.map((item,index)=>{
            item.checked = isTrue
            //this.isSelectAll=item.checked;
            this.record.push(item.checked)
          })
          console.log(this.record);
          this.record.map((item,index)=>{
            if(item==true){
              this.isSelectAll= true;
            }
            else{
              this.isSelectAll=  false;
            }
          })
          console.log(this.isSelectAll)
        }
      },
      computed:{
        ...mapGetters(['cartList']),
        totalPrice(){
           return this.$store.state.cartList.filter(item=>{
             return item.checked  //返回选中的商品信息
           }).reduce((preValue,item)=>{    //reduce一个循环的方法 preVale迭代计算后的结果， item单个数组元素  map也可以实现较麻烦 map((item,index)=>{
              return preValue+item.price * item.count
           },0).toFixed(2)  //函数迭代的初始值0 从0开始遍历
        },
        count(){
          return this.$store.state.cartList.filter(item=>{
            return item.count,item.checked  //返回商品数量 并且是选中
          }).reduce((preValue,item)=>{
            return preValue+item.count
          },0)
        }
      }
    }
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    width: 80%;
    border-top: 2px solid #f0f0f0;
    background-color: white;
    position: fixed;
    bottom: 59px;
    z-index: 2;

  }
  .check-button{
    margin: 5px 8px;
    width: 27px;
    display: inline-block;
  }
  span{
    display: inline-block;
    position: relative;
    top: -10px;
  }
  .calculate-price{
    margin-left: 20px;
    width: 50%;
  }
  .aggregate{
    width: 83px;
    height: 40px;
    text-align: center;
    border-top: 2px solid #f0f0f0;
    padding: 6px 0px;
    background-color: #ffce07;
    position: relative;
    left: 100%;
    top: -44px;
  }
  .checkImgs {
    background-image: url("../../../assets/img/tabbar/gougou-.png");
    background-repeat: no-repeat;
    background-size: 25px;
    /*  width:25px;*/
    /*  height:25px;*/
    /*}*/
  }
</style>
