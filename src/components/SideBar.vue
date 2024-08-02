<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <aside
    id="logo-sidebar"
    aria-label="Sidebar"
    class="fixed top-0 left-0 z-40 w-[5.15rem] h-full transition-transform -translate-x-full sm:translate-x-0"
  >
    <div class="h-full bg-primary px-5">
      <RouterLink class="flex items-center justify-center" to="/home">
        <span
          class="icon-[ci--hamburger] bg-white h-[2.3rem] w-[1.8rem] mt-8"
        ></span>
      </RouterLink>
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink
            class="rounded-lg dark:text-white hover:text-black text-white hover:font-semibold hover:bg-sky-300/50 group"
            to="/adopciones"
          >
            <div class="flex flex-col items-center pt-[4.5rem]">
              <i
                aria-hidden="true"
                class="icon-[ion--paw-outline] flex-shrink-0 w-[1.9rem] h-[1.9rem] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              />
              <span class="text-[0.7rem] mt-1 font-bold">Adopciones</span>
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded-lg dark:text-white hover:text-black text-white hover:font-semibold hover:bg-sky-300/50 group"
            to="/inventario"
          >
            <div class="flex flex-col items-center pt-[1.5rem]">
              <i
                aria-hidden="true"
                class="icon-[material-symbols--inventory-2-outline] flex-shrink-0 w-[1.9rem] h-[1.9rem] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              />
              <span class="text-[0.7rem] mt-1 font-bold">Inventario</span>
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="rounded-lg dark:text-white hover:text-black text-white hover:font-semibold hover:bg-sky-300/50 group"
            to="/donaciones"
          >
            <div class="flex flex-col items-center pt-[1.5rem]">
              <i
                aria-hidden="true"
                class="icon-[heroicons-outline--currency-dollar] flex-shrink-0 w-[1.95rem] h-[1.95rem] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 18"
                xmlns="http://www.w3.org/2000/svg"
              />
              <span class="text-[0.7rem] mt-1 font-bold">Donaciones</span>
            </div>
          </RouterLink>
        </li>
      </ul>
      <div class="flex justify-center mt-[20rem]">
        <button>
          <span
            class="icon-[solar--logout-linear] h-[1.6rem] w-[1.6rem] text-white/65 hover:text-white/100"
          ></span>
        </button>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
