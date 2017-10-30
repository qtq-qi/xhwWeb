import Vue from 'vue'
import Router from 'vue-router'
// import Homepage from '@/page/Homepage'
// import Classify from '@/page/Classify'
// import Cart from '@/page/Cart'
// import Mine from '@/page/Mine'
const Homepage = resolve => require(['@/page/Homepage.vue'],resolve)
const Classify = resolve => require(['@/page/Classify.vue'],resolve)
const Cart = resolve => require(['@/page/Cart.vue'],resolve)
const Mine = resolve => require(['@/page/Mine.vue'],resolve)

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
