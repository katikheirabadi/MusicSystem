import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
const routes = [
  {
    path: '/:lang',
    component: home,
  },
  {
    path: '/',
    redirect:'/en'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
