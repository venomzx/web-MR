import { createRouter, createWebHistory } from 'vue-router'

//import page
import Homepage from "../page/Homepage.vue";
import Login from "../page/Login.vue";


const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Homepage
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router