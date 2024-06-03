import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/pages/LandingPage.vue") },
  { path: "/home", component: () => import("@/pages/Home.vue") },
  { path: "/adopciones", component: () => import("@pages/Adoption.vue") },
  { path: "/inventario", component: () => import("@pages/Inventory.vue") },
  {
    path: "/donaciones",
    component: () => import("@pages/Donation.vue"),
  },
  {
    path: "/solicitudes-adopciones",
    component: () => import("@pages/AdoptionRequests.vue"),
  },
  {
    path: "/pet-info/:id",
    component: () => import("@pages/PetInfo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
