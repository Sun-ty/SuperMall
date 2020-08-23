<template>
    <div class="cart-item">
      <div class="cart-img">
        <!--勾勾按钮-->
        <div style="margin-left: 6px;">
          <CheckButton :isChecked="cart"/>
        </div>
        <img :src="cart.image"  width="95px" height="105px"/>
      </div>
      <div class="cart-info">
        <p>{{cart.title}}</p>
        <p>{{cart.desc}}</p>
        <p>
          <span style="display:inline-block;width: 83%;">{{"￥"+cart.price}}</span>
          <span style="color: black">{{"x"+cart.count}}</span>
        </p>
      </div>
    </div>
</template>

<script>
    import CheckButton from "../../../components/content/checkButton/CheckButton";

    export default {
      name: "CartListItem",
      props:["cart"],
      components:{
        CheckButton
      },
      methods:{

      }
    }
</script>

<style scoped>

  .cart-item{
    border-bottom: 1px solid #d6d8d9;
  }
  .cart-item div{
    display: inline-block;
  }
  .cart-img{
     position: absolute;
  }
 img{
   border-radius: 10px;
   margin: 10px;
 }
  .cart-info{
    margin-left: 160px;
    margin-bottom: 20px;
  }
 .cart-info p{
   width: 212px;
   margin: 0;
   margin-top: 10px;
   /*以...省略号替代多余的文字 对p标签管用*/
   text-overflow:ellipsis;
   white-space:nowrap;
   overflow:hidden;
 }
  .cart-info p:first-child{
    font-size: 17px;
  }
  .cart-info p:nth-child(2){
    font-size: 14px;
  }
  .cart-info p:last-child{
    margin-top: 20px;
    font-size: 18px;
    color: orangered;
  }
</style>
