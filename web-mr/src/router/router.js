import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login/Login.vue"
import QuestBoard from "../views/QuestBoard/Questboard.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/Login'
        },
        {
            path: '/QuestBoard',
            name: 'QuestBoard',
            component: QuestBoard
        },
        {
            path:'/Login',
            name: 'Login',
            component: Login
        }
    ]
})

export default router
