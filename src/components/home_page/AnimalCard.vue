<script lang="ts" setup>
import maleIcon from "../../assets/home_page/male.svg"
import femaleIcon from "../../assets/home_page/female.svg"
import { defineProps } from "vue";




const { animal } = defineProps<{
  animal: Animal,
}>();
const genero = animal.genero === "Macho" ? maleIcon : femaleIcon
const adoptado = animal.estado ? "ADOPTADO" : "NO ADOPTADO"
console.log(animal)
</script>


<template>
  <a href="#"
    class="w-64 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class="size-72 rounded-t-lg" :src="animal.imagen" alt="animal image" />
    <div class="p-5">
      <div class="flex gap-2 items-center">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ animal.nombre }}</h5>
        <img class="size-6" :src="genero" alt="">
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ `${animal.edad} años | ` }}
        <span :class="{ 'text-[#11720A]': animal.estado, 'text-red-950': !animal.estado }">{{ adoptado }}</span>
      </p>

    </div>
  </a>

</template>
