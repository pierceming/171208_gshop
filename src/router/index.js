/*
* 路由器模块对象
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//申明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有的路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    }, {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    }, {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    }, {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    }, {
      path: '/',
      redirect: '/msite'
    }, {
      path: '/login',
      component: Login
    },
  ]
})
