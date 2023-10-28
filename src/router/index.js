import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import welcome from '../views/Sign/Login.vue'
import AcademyHome from '../views/Academy/AcademyHome.vue'
import LessonDetail from '@/views/Lesson/Products.vue'
import Shoppingbag from '@/views/User/Shoppingbag.vue'
import Bank from '@/views/Bank/Result.vue'
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
    path: '/Lessons/:lesson',
    name:'lessondetail',
    component: LessonDetail,
  },
  {
    path: '/:academy',
    name:'AcademyHome',
    component: AcademyHome,
  },
  {
    path: '/Your_Bag',
    name:'bag',
    component: Shoppingbag,
  },
  {
    path: '/Bank',
    name:'bank',
    component: Bank,
  },
  {
    path: '/',
    redirect:'/fa'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
