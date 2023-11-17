import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import welcome from '../views/Sign/Login.vue'
import About from '@/views/About.vue'

import Academy from '../views/Academy/Home.vue'
import Academies from '../views/Academy/List.vue'

import Lessons from '@/views/Lesson/List.vue'
import LessonDetail from '@/views/Lesson/Products.vue'

import Panel from '@/views/User/Panel.vue'
import Shoppingbag from '@/views/User/Shoppingbag.vue'
import Bank from '@/views/Bank/Result.vue'
const routes = [
  {
    path: '/:lang',
    name:'Home',
    component: home,
  },
  {
    path: '/welcome-to-karosaz',
    name:'welcome',
    component: welcome,
  },
  {
    path: '/:academy/Lessons',
    name:'lessons',
    component: Lessons
  },
  {
    path: '/Lessons/:lessonid',
    name:'lessondetail',
    component: LessonDetail,
  },
  {
    path: '/:academy',
    name:'Academy',
    component: Academy,
  },
  {
    path:'/karosaz-academies',
    name:'Academies',
    component :Academies
  },
  {
    path: '/Your_Bag',
    name:'bag',
    component: Shoppingbag
  },
  {
    path: '/Bank',
    name:'bank',
    component: Bank,
  },
  {
    path: '/About-Karosaz',
    name:'about',
    component: About,
  },
  {
    path: '/Hello!',
    name:'panel',
    component: Panel,
  },
  {
    path: '/',
    redirect:'/fa'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
  next(); // Proceeds with the route change
});
export default router
