import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Docs from '../views/Docs.vue'

const siteUrl = window.location.protocol + '//' + window.location.host

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { siteUrl: siteUrl } },
  { path: '/docs', name: 'Docs', component: Docs, meta: { siteUrl: siteUrl } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router