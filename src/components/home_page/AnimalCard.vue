<script lang="ts" setup>
import maleIcon from "../../assets/home_page/male.svg"
import femaleIcon from "../../assets/home_page/female.svg"




const { animal } = defineProps<{
  animal: Animal,
}>();
const genero = animal.genero === "Macho" ? maleIcon : femaleIcon
const adoptado = animal.estado ? "ADOPTADO" : "NO ADOPTADO"
console.log(animal)
</script>


<template>
  <a href="#"
    class="size-40  md:w-[15rem] h-max max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class=" h-52 md:size-64 w-full   rounded-t-lg" :src="animal.imagen" alt="animal image" />
    <div class="pl-4 py-3 pr-3 text-[0.8rem]">
      <div class=" flex gap-2 w-min items-center mb-2">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ animal.nombre }}</h5>
        <img class="size-6" :src="genero" alt="">
      </div>
      <div>
        <p class=" text-gray-700 dark:text-gray-400">{{ `Aproximadamente ${animal.edad} años` }}
        </p>
        <span
          :class="{ 'text-[#11720A] font-semibold': animal.estado, 'text-red-950 font-semibold': !animal.estado }">{{
            adoptado }}</span>
      </div>


    </div>
  </a>

</template>
