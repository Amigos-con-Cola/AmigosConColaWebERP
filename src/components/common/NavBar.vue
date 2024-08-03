<script lang="ts" setup>
import AmigosConColaLogo from "@assets/images/amigos-con-cola-logo.png";
</script>

<template>
  <nav
    class="w-full sticky bg-white border-[0.005rem] p-2.5 drop-shadow flex justify-between items-center"
  >
    <div class="ml-2">
      <RouterLink class="flex items-center" to="/home">
        <img
          :src="AmigosConColaLogo"
          alt="Logo de Amigos con cola"
          class="w-9 h-9 lg:w-12 lg:h-12"
        />
        <span class="ml-1 lg:font-medium text-xs lg:text-[1.1rem]"
          >Amigos con cola</span
        >
      </RouterLink>
    </div>
    <div class="flex">
      <slot />
    </div>
  </nav>
</template>

<style scoped></style>
