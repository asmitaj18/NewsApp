import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import NewsDetailView from '../views/NewsDetailView.vue'
import { VisitedNews } from '@/views'
import ErrorView from '../views/ErrorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NewsView',
    component: NewsView
  },
  {
    path: '/detail/:index',
    name: 'NewsDeatilView',
    component: NewsDetailView,
  },
  {
    path: '/history',
    name: 'history',
    component: VisitedNews,
  },
  {
    path: '/error',
    name: 'error',
    props: true,
    component: ErrorView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
