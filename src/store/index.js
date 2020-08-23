import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    //mutations唯一的目的是修改state中的状态
    //mutations中的每一个方法尽可能完成的时间比较单一 一点
    //1.将actions中的方法 中的两个操作分开封装
    addCounter(state,payload){
      payload.count++;   //添加一个count属性
    },
    addToCart(state,payload){
      payload.checked=false  //添加一个是否选中状态
      state.cartList.push(payload)
      console.log(state.cartList)
    }

  },
  actions: {
    /**
     * 较复杂的数据 放actions    放mutations中不合适
     * @param state
     * @param payload
     */
    addCart(context,payload){
      // let oldProduct=0;
      // for(let item of state.cartList){
      //   if(item.iid===payload.iid){
      //     oldProduct=item;
      //   }
      // }
      //1.查找之前之前数组中是否有该商品   是否是一件商品添加了两次
      let product=context.state.cartList.find(item=> item.iid===payload.iid)
      //product返回的值是一个数组 第一次为undefined 因为数组自有一个数据不会有重复商品
      if(product){
       // product.count+=1
        context.commit('addCounter',product)
      }else{
        payload.count=1    //添加一个count属性  并在没有重复商品时默认为1
        context.commit('addToCart',payload)
        //context.cartList.push(payload);
      }

    }
  },
  modules: {
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  }
})
