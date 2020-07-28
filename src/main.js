import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'; //在需要使用的页面中引用
import 'assets/js/bootstrap.min'  //导入bootstrap.js

Vue.config.productionTip = false

//使用原型 创建了一个Vue实例作为事件总线 $bus
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
