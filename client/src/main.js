// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import VueSessionStorage from 'vue-sessionstorage'
// import vueScrollBehavior from 'vue-scroll-behavior'

Vue.use(VueSessionStorage);

Vue.config.productionTip = false

// Vue.use(vueScrollBehavior, { router: router });

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
