import { createWebHistory, createRouter } from 'vue-router'

import Home from "@/pages/Home.vue"
import LandingPage from "@/pages/LandingPage.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/LandingPage', component: LandingPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
