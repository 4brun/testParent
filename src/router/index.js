import Vue from 'vue'
import VueRouter from 'vue-router'
import Forms from '@/views/Forms.vue'
import Preview from '@/views/Preview.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})

export default router
