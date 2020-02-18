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
    path: '/work',
    name: 'Work',
    meta: {
      layout: "main"
    },
    component: () => import('../views/Work.vue')
  },
  {
    path: '/skill',
    name: 'Skill',
    meta: {
      layout: "main"
    },
    component: () => import('../views/Skill.vue')
  },
  {
    path: '/customers',
    name: 'Customers',
    meta: {
      layout: "main"
    },
    component: () => import('../views/Customers.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    meta: {
      layout: "main"
    },
    component: () => import('../views/Contacts.vue')
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
