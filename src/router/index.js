import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      layout: "main"
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about1',
    name: 'About1',
    meta: {
      layout: "main"
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about2',
    name: 'About2',
    meta: {
      layout: "main"
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: "empty"
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
