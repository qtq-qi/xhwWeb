import Vue from 'vue'
import Router from 'vue-router'

//页面的一些路由配置
import Homepage from '@/page/Homepage'
import Classify from '@/page/Classify'
import Cart from '@/page/Cart'
import Mine from '@/page/Mine'

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
    }
  ]
})
