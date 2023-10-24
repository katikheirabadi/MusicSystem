import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import welcome from '../views/Sign/Login.vue'
import AcademyHome from '../views/Academy/AcademyHome.vue'
import LessonDetail from '@/views/Lesson/Products.vue'
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
    path: '/',
    redirect:'/fa'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
