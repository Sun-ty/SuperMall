<template>
    <div>
        <router-view></router-view>
        <TabBar>
            <TabBarItem path="/home">  <!--因为是组件那自己的属性不需要加： 如果是APP组件拿子组件TabBarItem就需要：传递数据-->
                <!--TabBarItem它的内部为两个具名插槽  使用使用要加slot属性 -->
                <img slot="item-icon" src="@/assets/img/tabbar/home.png" width="30px" height="30px"/>
                <img slot="item-icon-active" src="@//assets/img/tabbar/home2.png" width="30px" height="30px"/>
                <div slot="item-text">首页</div>
            </TabBarItem>
           <!-- @符号 相对于src文件夹的 绝对路径 解决图片或文件 层级路径  -->
            <TabBarItem path="/caregory">
                <img slot="item-icon" src="@/assets/img/tabbar/fenlei.png" width="30px" height="30px"/>
                <img slot="item-icon-active" src="@/assets/img/tabbar/fenlei2.png" width="30px" height="30px"/>
                <div slot="item-text">分类</div>
            </TabBarItem>
          <!-- ~ 符号  已经在vue.config.js中配置别名  在页面上直接使用~ -->
            <TabBarItem path="/cart">
                <img slot="item-icon" src="~assets/img/tabbar/shopping.png" width="27px" height="27px"/>
                <img slot="item-icon-active" src="~assets/img/tabbar/shopping2.png" width="27px" height="27px"/>
                <div slot="item-text" style="padding-top: 2px">购物车</div>
            </TabBarItem>
            <TabBarItem path="/profile">
                <img slot="item-icon" src="~assets/img/tabbar/my.png" width="25px" height="25px"/>
                <img slot="item-icon-active" src="~assets/img/tabbar/my2.png" width="25px" height="25px"/>
                <div slot="item-text" style="padding-top: 5px">我的</div>
            </TabBarItem>

        </TabBar>
    </div>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar";  //菜单栏 整个框框 组件
    import TabBarItem from "../../common/tabbar/TabBarItem"; //菜单内容 图+文字 组件 想要多少个菜单选项就去<TabBarItem>中添加

    export default {
        name: "MainTabBar",
           components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
