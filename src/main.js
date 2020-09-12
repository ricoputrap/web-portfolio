import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import store from './store'

import Home from './pages/Home'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home }
  ],
  mode: 'history'
})

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
