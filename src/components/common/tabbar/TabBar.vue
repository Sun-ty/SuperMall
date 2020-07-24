<template>
    <div id="tab-bar">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar{
        display: flex;
        background-color: #f6f6f6;
        position: fixed;/*固定定位到页面底部*/
        left: 0px;
        right: 0px;
        bottom: 0px;
    }



</style>