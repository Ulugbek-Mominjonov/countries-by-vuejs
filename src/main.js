import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseInput from '@/components/BaseInput.vue';

Vue.config.productionTip = false

Vue.component('BaseInput', BaseInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
