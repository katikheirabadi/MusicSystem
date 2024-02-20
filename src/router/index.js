import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/Store";



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
    path: '/:academyId/:academy/:category/Lessons',
    name:'lessons',
    component: Lessons
  },
  {
    path: '/Lessons/:academyId/:lessonid',
    name:'lessondetail',
    component: LessonDetail,
  },
  {
    path: '/Academy/:academy',
    name:'Academy',
    component: Academy
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

const Auth = () => {
  return localStorage.getItem("token") != null && localStorage.getItem("token") != ""
} 

router.beforeEach(async (to, from, next) => {
  var destination = to.path;
  if(to.name == 'Home' && localStorage.getItem('token')==undefined){
     store.state.language = to.fullPath.split('/')[1]
    localStorage.setItem('lang',store.state.language)
  }
  
  const publicPages = ['Hone','welcome','lessons','lessondetail','Academy','Academies','about'];
  const authRequired = publicPages.find(i => i==to.name);

  if (Auth()) {
      if (store.state.profile == null || Object.entries(store.state.profile).length === 0) {
         //todo
         try {
          const res = await store.dispatch("getProfile");
          if (res && !authRequired) {
              destination = to.path;
          } else if (!res) {
              localStorage.removeItem('token');
              store.state.profile = {};
              destination = 'fa';
          }
      } catch (error) {
          console.error(error);
      }

      }
      // else if (!authRequired) {
      //     destination = to.from.path;
      // }

  } else {
      store.state.profile = {}
  }

  if (to.path == from.path) {
    window.scrollTo(0, 0);
    return next();
  }

  if (authRequired =='' && !Auth()) {
      window.scrollTo(0, 0);
      next({ name:'Home' });
      return;
  }

  if (to.path != destination) {
     window.scrollTo(0, 0);
      next({ name: destination });
  } else {
      window.scrollTo(0, 0);
      next()
  }

});

export default router
