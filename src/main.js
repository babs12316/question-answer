import Vue from 'vue'
import App from './App.vue'
import router from './router'
import responsive from 'vue-responsive'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(responsive)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
