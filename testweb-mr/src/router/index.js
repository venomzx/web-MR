import { createRouter, createWebHistory } from 'vue-router'

const isLogin = false

// const isLogin = this.$store.state.user_token

const routes = [
  {
    path: '/',
    redirect: isLogin == null ? '/QuestBoard' : '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/RegisterAvatar',
    name: 'RegisterAvatar',
    component: () => import('../views/RegisterAvatar.vue')
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
