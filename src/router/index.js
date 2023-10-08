import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import welcome from '../views/Sign/Login.vue'
import category from '../views/Academy/Category.vue'
const routes = [
  {
    path: '/:lang',
    component: home,
  },
  {
    path: '/welcome-to-karosaz',
    name:'welcome',
    component: welcome,
  },
  {
    path: '/:academy/categories',
    name:'category',
    component: category,
  },
  {
    path: '/',
    redirect:'/fa'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
