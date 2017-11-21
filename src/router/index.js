import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import compare from '@/pages/compare'

import 'static/index'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/compare',
      name: 'compare',
      component: compare
    }
  ]
})
