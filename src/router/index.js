import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Home from "../views/Homepage.vue";
import What from "../views/What.vue";
import How from "../views/How.vue";
import Checklist from "../views/Checklist.vue";
import Demo from "../views/Demo.vue";

import Error from "../views/404.vue";




const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path: '/what',
    component:What
  },
  {
    path: '/how',
    component:How
  },
  {
    path: '/checklist',
    component:Checklist
  },
  {
    path: '/demo',
    component:Demo
  },
  {
    path: '/:pathMatch(.*)*',
    component:Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;