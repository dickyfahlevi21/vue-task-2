import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import AsyncComputed from 'vue-async-computed'

Vue.use(AsyncComputed);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')