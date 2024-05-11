import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/landing-page', component: () => import("@/pages/LandingPage.vue")},
    {path: '/', component: () => import("@/pages/Home.vue")},
    {path: '/adopciones', component: () => import("@pages/Adoption.vue")},
    {path: '/inventario', component: () => import("@pages/Inventory.vue")},
    {path: '/donaciones', component: () => import("@pages/Donation.vue")},
    {path: '/solicitudes-adopciones', component: () => import("@pages/AdoptionRequests.vue")},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
