import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/Store";
import config from '../../public/config.json'
import Swal from 'sweetalert2';
import axios from 'axios';

import home from '../views/Home.vue'
import welcome from '../views/Sign/Login.vue'
import About from '@/views/About.vue'
import Academy from '../views/Academy/Home.vue'
import Academies from '../views/Academy/List.vue'
import Survey from '@/views/User/Survey.vue';

import Lessons from '@/views/Lesson/List.vue'
import LessonDetail from '@/views/Lesson/Products.vue'

import Panel from '@/views/User/Panel.vue'
import Shoppingbag from '@/views/User/Shoppingbag.vue'
import Bank from '@/views/Bank/Result.vue'
import Store from '../store/Store';


const routes = [
  {
    path: '/:lang',
    name: 'Home',
    component: home,
  },
  {
    path: '/welcome-to-karosaz',
    name: 'welcome',
    component: welcome,
  },
  {
    path: '/:academyId/:academy/:category/Lessons',
    name: 'lessons',
    component: Lessons
  },
  {
    path: '/Lessons/:academyId/:lessonid',
    name: 'lessondetail',
    component: LessonDetail,
  },
  {
    path: '/Academy/:academy',
    name: 'Academy',
    component: Academy
  },
  {
    path: '/karosaz-academies',
    name: 'Academies',
    component: Academies
  },
  {
    path: '/Your_Bag',
    name: 'bag',
    component: Shoppingbag
  },
  {
    path: '/Bank',
    name: 'bank',
    component: Bank,
  },
  {
    path: '/About-Karosaz',
    name: 'about',
    component: About,
  },
  {
    path: '/Hello!',
    name: 'panel',
    component: Panel,
  },
  {
    path: '/Say_Your_Opinion/:pack/:Up/:type',
    name: 'survey',
    component: Survey
  },
  {
    path: '/',
    redirect: '/fa'
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

router.beforeEach((to, from, next) => {
  var destination = to.path;
  if (to.name == 'Home' && localStorage.getItem('token') == undefined) {
    store.state.language = to.fullPath.split('/')[1]
    localStorage.setItem('lang', store.state.language)
  }

  const publicPages = ['Home', 'welcome', 'lessons', 'lessondetail', 'Academy', 'Academies', 'about'];
  const authRequired = publicPages.find(i => i == to.name);

  if (Auth()) {
    if (store.state.profile == null || Object.entries(store.state.profile).length === 0) {

      try {
        if (localStorage.getItem('token') != null && localStorage.getItem('token') != '') { axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` }
        axios.get(config.apihost + 'api/User/GetUserBaseInfo')
          .then(response => {
            store.state.profile = response.data
            if (to.path == from.path && to.path == destination) {
              to.path = destination
            }
            window.scrollTo(0, 0);
            next()
          })
          .catch(error => {
            localStorage.removeItem('token');
            store.state.profile = {};
            to.path = '/';
            next()
          
          })
      } catch (error) {
        localStorage.removeItem('token');
        store.state.profile = {};
        to.path = '/';
        next()
      }

    } else {
      next()
    }

  } else {
    store.state.profile = {}
    if (authRequired == undefined) {
      destination = '/fa'
    } else {
      next()
      return
    }
    next(destination)
    return

  }


});

export default router
