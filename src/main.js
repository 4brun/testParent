import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import { store } from './store'
import router from './router'

Vue.use(VueCompositionAPI)

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
})

app.$mount('#app')
