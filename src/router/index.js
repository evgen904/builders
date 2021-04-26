import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/main.vue'),
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/articles.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
