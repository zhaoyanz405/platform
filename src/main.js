import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './plugins/element.js'
import routers from '@/routers'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})
console.log(router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
