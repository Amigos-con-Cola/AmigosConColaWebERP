<script lang="ts" setup>
import { Animal } from "@stores/animalStore.ts";
import dogUrl from "@/assets/images/dog_default.jpg";
import catUrl from "@/assets/images/cat_default.jpg";
import { AnimalSpecies } from "@/enums/animal_species.ts";
import AnimalGenderIcon from "@/components/home_page/AnimalGenderIcon.vue";

const { animal } = defineProps<{ animal: Animal }>();

const adoptado = animal.adoptado ? "ADOPTADO" : "NO ADOPTADO";
</script>

<template>
  <div
    class="size-40 md:w-[15rem] h-max max-w-sm bg-white shadow border border-t-gray-500/25 border-x-gray-600/20 rounded-t-xl rounded-b-xl"
  >
    <div>
      <img
        :src="
          animal.imagen ??
          (animal.especie === AnimalSpecies.DOG ? dogUrl : catUrl)
        "
        alt="animal image"
        class="h-52 md:size-64 w-full rounded-t-xl aspect-square object-cover"
      />
    </div>

    <div
      class="pl-4 pr-4 py-4 text-[0.8rem] shadow-md rounded-b-xl bg-gray-200/45 border border-t-gray-500/15"
    >
      <div class="flex justify-between w-full items-center mb-2">
        <h5
          class="text-[1.42rem] font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ animal.nombre }}
        </h5>
        <AnimalGenderIcon :gender="animal.genero" />
      </div>
      <div>
        <p class="text-gray-700 dark:text-gray-400">
          {{ `${animal.edad} meses` }}
        </p>
        <span
          :class="{
            'text-[#11720A] font-semibold': animal.adoptado,
            'text-primary font-semibold': !animal.adoptado,
          }"
          >{{ adoptado }}</span
        >
      </div>
    </div>
  </div>
</template>
