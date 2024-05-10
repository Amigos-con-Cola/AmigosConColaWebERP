import {createRouter, createWebHistory} from 'vue-router'

import Home from "@/pages/Home.vue"
import LandingPage from "@/pages/LandingPage.vue";
import Adoption from "@pages/Adoption.vue";
import AdoptionRequests from "@pages/AdoptionRequests.vue";
import Inventory from "@pages/Inventory.vue";
import Donation from "@pages/Donation.vue";

const routes = [
    {path: '/landing-page', component: LandingPage},
    {path: '/', component: Home},
    {path: '/adopciones', component: Adoption},
    {path: '/inventario', component: Inventory},
    {path: '/donaciones', component: Donation},
    {path: '/solicitudes-adopciones', component: AdoptionRequests},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
