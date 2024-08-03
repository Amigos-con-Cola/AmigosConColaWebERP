import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/pages/LandingPage.vue") },
  { path: "/home", component: () => import("@pages/HomePage.vue") },
  { path: "/login", component: () => import("@/pages/LoginPage.vue") },
  { path: "/inventario", component: () => import("@pages/Inventory.vue") },
  {
    path: "/animales/nuevo",
    name: "crear-animal",
    component: () => import("@pages/NewAnimalPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _from) => {
  const accessToken = localStorage.getItem("access_token");
  const authenticated = accessToken !== null;

  if (!authenticated && to.path !== "/login" && to.path !== "/") {
    return "/login";
  }

  if (authenticated && to.path === "/login") {
    return "/home";
  }
});

export default router;
