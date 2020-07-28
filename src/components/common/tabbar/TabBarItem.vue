<template>
  <!--在不同组件的内部使用 他的样式不一样，文字数量也不一样，可能有点地方还要加入图片 所以预留插槽-->
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String  //传入的路由路径  为一个数组4个路由
        },
        data(){
            return{
               // isActive:true
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path).catch(err=>err);
                console.log(this.path);
            }
    },
        computed:{
            isActive(){
               //console.log(this.$route)  为点击的那个路由路径
                /**
                 * 为什么使用计算属性实现按钮的颜色切换？    一个属性受多个属性影响   当一个属性发生改变，立马重新计算
                 * eg:   1.第一次this.$route.path打印 —— '/home'
                 *       2. 4个菜单按钮全部拿着当前路由‘/home’去和自己的path对比，结果总会有三个匹配不上
                 */
                return this.$route.path.indexOf(this.path)!==-1  //$route获取属性，参数(params,query)等等
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;  /*横向布局*/
        text-align: center;
        height: 59px;
    }
    .active{
       color: pink;
    }
</style>
