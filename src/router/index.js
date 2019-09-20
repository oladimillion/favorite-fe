import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from '@/views/LandingPage'
import Dashboard from '@/views/Dashboard'

const routes = [
  { path: '/', name: 'Landing Page', component: LandingPage },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '*', redirect: '/' },
]


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes,
})
