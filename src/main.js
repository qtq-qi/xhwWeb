// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store'

import router from './router'
// import Resource from 'vue-resource'
// 引入mint
import { Swipe, SwipeItem, MessageBox, Lazyload  } from 'mint-ui';
import 'mint-ui/lib/style.css'
 // vuex
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(Lazyload)
// Vue.use(Resource)
Vue.prototype.$msg = MessageBox

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.$http = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
