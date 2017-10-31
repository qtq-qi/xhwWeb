import Vue from 'vue'
import Router from 'vue-router'
// import Homepage from '@/page/Homepage'
// import Classify from '@/page/Classify'
// import Cart from '@/page/Cart'
// import Mine from '@/page/Mine'
//主页
const Homepage = resolve => require(['@/page/Homepage.vue'],resolve)
//闪送超市
const Classify = resolve => require(['@/page/Classify.vue'],resolve)
//购物车
const Cart = resolve => require(['@/page/Cart.vue'],resolve)
//我的页
const Mine = resolve => require(['@/page/Mine.vue'],resolve)
//会员登录
const denglu = resolve => require(['@/page/Denglu.vue'],resolve)
//手机登录
const phonedenglu = resolve => require(['@/page/Phonedenglu.vue'],resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/home',
      name: 'home',
      component: Homepage
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/phonedenglu',
      name: 'phonedenglu',
      component: phonedenglu
    }
  ]
})
