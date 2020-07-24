import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: ()=>import("../views/home/Home"),
      meta:{
        title:'首页'
      }
    },
    {
      path: '/cart',
      component: ()=>import('../views/cart/Card'),
      meta:{
        title:'购物车'
      }
    },
    {
      path: '/caregory',
      component: ()=>import('../views/caregory/Category')
      ,meta:{
        title:'分类'
      }
    },
    {
      path: '/profile',
      component: ()=>import('../views/profile/Profile'),
      meta:{
        title:'我的'
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * 全局导航守卫  只要路由发生改变都能监听到  使网页的title都有值
 */
router.beforeEach((to,from,next)=>{
    //从from跳转到to    from：当前导航即将要离开的路由对象    to：即将要进入的目标路由对象
    // document.title=to.meta.title  跳转到目标地址，为目标地址的页面title展示对应的title
    document.title=to.matched[0].meta.title //例如home路由，他有子路由当点击子路由时，子路由的页面title为undefined，所以把页面的title设置为路由数组的第一位的title，推荐这种使用
    next()   //调用该方法后，才能进入下一个钩子，也可以在next方法中传入false终止跳转，也可以在next方法中指定下一个路由path
  }
)

export default router
