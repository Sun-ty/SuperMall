<template>
    <div class="cart-list">
      <cart-list-item v-for="(item,index) in this.$store.state.cartList" :cart="item" :key="index"/>
    </div>
</template>

<script>
    import CartListItem from "./CartListItem";

    export default {
      name: "CartList",
      components:{
        CartListItem
      }
    }
</script>

<style scoped>

</style>
