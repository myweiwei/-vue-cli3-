import Vue from 'vue'
import Router from 'vue-router'
import First from './views/First.vue'
import Left from './components/Left.vue'
import B from './components/B.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: First
    },
    {
      path: '/Left',
      component: Left
    },
    {
      path: '/B',
      component: B
    }
  ]
})
