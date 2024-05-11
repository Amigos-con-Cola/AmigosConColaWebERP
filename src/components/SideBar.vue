<script lang="ts" setup>
import {onMounted} from 'vue'
import {initFlowbite} from 'flowbite'
import AmigosConColaLogo from '@assets/images/amigos-con-cola-logo.png'

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <button
      aria-controls="logo-sidebar"
      class="inline-flex w-10 items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
      type="button"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
        aria-hidden="true"
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          clip-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          fill-rule="evenodd"></path>
    </svg>
  </button>

  <aside
      id="logo-sidebar"
      aria-label="Sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-primary dark:bg-gray-800">
      <RouterLink
          class="flex items-center justify-center h-16 ps-2.5 mb-8 mt-5"
          to="/"
      >
        <img
            alt="Amigos con cola Logo"
            class="h-28 w-28 "
            :src="AmigosConColaLogo"
        />
      </RouterLink>
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink
              class="flex items-center p-2 rounded-lg dark:text-white hover:text-black text-white hover:font-semibold hover:bg-sky-300/50 dark:hover:bg-gray-700 group"
              to="/"
          >
            <i
                aria-hidden="true"
                class="icon-[typcn--home-outline] w-8 h-8 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 22 21"
                xmlns="http://www.w3.org/2000/svg"
            />
            <span class="ms-3 text-base">Inicio</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
              class="flex items-center p-2 rounded-lg dark:text-white hover:text-black hover:font-semibold hover:bg-sky-300/50 text-white dark:hover:bg-gray-700 group"
              to="/adopciones">
            <i
                aria-hidden="true"
                class="icon-[ion--paw-outline] flex-shrink-0 w-8 h-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
            />
            <span class="flex-1 ms-3 whitespace-nowrap text-base">Adopciones</span>
            <!--            <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>-->
          </RouterLink>
        </li>
        <li>
          <RouterLink
              class="flex items-center p-2 rounded-lg dark:text-white hover:text-black text-white hover:font-semibold hover:bg-sky-300/50 dark:hover:bg-gray-700 group"
              to="/inventario">
            <i
                aria-hidden="true"
                class="icon-[material-symbols--inventory-2-outline] flex-shrink-0 w-8 h-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            />
            <span class=" flex-1 ms-3 whitespace-nowrap text-base">Inventario</span>
            <!--            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>-->
          </RouterLink>
        </li>
        <li>
          <RouterLink
              class="flex items-center p-2 hover:text-black rounded-lg dark:text-white text-white hover:font-semibold hover:bg-sky-300/50 group"
              to="/donaciones">
            <i
                aria-hidden="true"
                class="icon-[heroicons-outline--currency-dollar] flex-shrink-0 w-8 h-8 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 18"
                xmlns="http://www.w3.org/2000/svg"
            />
            <span class="flex-1 ms-3 whitespace-nowrap text-base">Donaciones</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
              class="flex  justify-center pr-2 pl-2 py-[0.7rem] text-gray-900 rounded-lg dark:text-white hover:font-semibold hover:bg-primary hover:bg-sky-300/50 dark:hover:bg-gray-700 group"
              to="/solicitudes-adopciones">
            <i
                aria-hidden="true"
                class="icon-[ic--round-inventory] flex-shrink-0 w-8 h-8 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 18 20"
                xmlns="http://www.w3.org/2000/svg"
            />
            <div class="flex flex-col flex-1 hover:text-black text-white justify-center h-10">
              <span class="ms-3 whitespace-nowrap text-base">Solicitudes de </span>
              <span class="ms-3 whitespace-nowrap text-base">adopciones</span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
</style>