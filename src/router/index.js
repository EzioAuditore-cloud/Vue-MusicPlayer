import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Layout from '../views/Layout.vue'
const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/diana',
        name: 'DianaView',
        component: () =>import ('../views/DianaView.vue')
      },
      {
        path: '/ava',
        name: 'AvaView',
        component: () =>import ('../views/AvaView.vue')
      },
      {
        path: '/carol',
        name: 'CarolView',
        component: () =>import ('../views/CarolView.vue')
      },
      {
        path: '/eileen',
        name: 'EileenView',
        component: () =>import ('../views/EileenView.vue')
      },
      {
        path: '/bella',
        name: 'BellaView',
        component: () =>import ('../views/BellaView.vue')
      },
      {
        path: '/mymusic',
        name: 'Mymusic',
        component: () =>import ('../views/Mymusic.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
