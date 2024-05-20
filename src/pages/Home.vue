<script lang="ts" setup>
import AddButton from "@/components/home_page/AddButton.vue";
import SearchInput from "@/components/home_page/SearchInput.vue";
import FilterButton from "@/components/home_page/FilterButton.vue";
import AnimalCard from "@/components/home_page/AnimalCard.vue";
import catIcon from "@/assets/home_page/cat.svg";
import bellIcon from "@/assets/home_page/bell.svg";
import dogIcon from "@/assets/home_page/dog.svg";
import filterIcon from "@/assets/home_page/filter.svg";
import animalsJSON from "@/fakedata.json";
import { ref, watch } from "vue";

export interface Animal {
  id: number;
  nombre: string;
  edad: number;
  genero: string;
  imagen: string;
  estado: boolean;
  tipo: string;
}

const animales = ref<Animal[]>(animalsJSON);
const search = ref("");
const isDogSelect = ref(false);
const isCatSelect = ref(false);
watch(search, () => {
  isCatSelect.value = false;
  isDogSelect.value = false;
  animales.value = animalsJSON.filter((animal) =>
    animal.nombre.toLowerCase().includes(search.value.toLowerCase()),
  );
});

const selectDogs = () => {
  animales.value = animalsJSON.filter((animal) => animal.tipo === "Perro");
  isDogSelect.value = true;
  isCatSelect.value = false;
};

const selectCats = () => {
  animales.value = animalsJSON.filter((animal) => animal.tipo === "Gato");
  isCatSelect.value = true;
  isDogSelect.value = false;
};
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="flex justify-start lg:justify-end items-center gap-3 mx-4 mt-5">
      <SearchInput v-model="search" />
      <AddButton
        ><span class="hidden md:flex">Registrar Animal</span></AddButton
      >
    </div>
    <div class="mt-5 mb-5 flex items-center gap-3">
      <h2 class="text-2xl md:text-4xl font-bold m-0">Categorías</h2>
      <img
        :src="bellIcon"
        alt="notification bell"
        class="mt-1 md:mt-2 size-4 md:size-6"
      />
    </div>
    <div class="flex flex-wrap gap-3 mt-4 mb-7">
      <FilterButton :icon="filterIcon" text="Filtrar" />
      <FilterButton
        :icon="dogIcon"
        :isSelect="isDogSelect"
        text="Perros"
        @click="selectDogs"
      />
      <FilterButton
        :icon="catIcon"
        :isSelect="isCatSelect"
        text="Gatos"
        @click="selectCats"
      />
    </div>
    <section class="gap-x-5 flex md:gap-x-5 lg:gap-x-11 gap-y-9 flex-wrap mt-2">
      <RouterLink
        v-for="animal in animales"
        :key="animal.id"
        :to="`/pet-info/${animal.id}`"
        class="gap-x-5 flex md:gap-x-5 lg:gap-x-11 gap-y-9 flex-wrap mt-2"
      >
        <AnimalCard :animal="animal" />
      </RouterLink>
    </section>
  </div>
</template>
