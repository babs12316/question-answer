import Vue from 'vue'
import App from './App.vue'
import router from './router'
import responsive from 'vue-responsive'

Vue.use(responsive)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
