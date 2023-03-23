import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    // redirect to login LATER
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/QuestBoard',
    name: 'QuestBoard',
    component: () => import('../views/QuestBoard.vue')
  },
  {
    path: '/LogEvent',
    name: 'LogEvent',
    component: () => import('../views/LogEvent.vue')
  },
  {
    path: '/PlayerBoard',
    name: 'PlayerBoard',
    component: () => import('../views/PlayerBoard.vue')
  },
  {
    path: '/Party',
    name: 'Party',
    component: () => import('../views/Party.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
