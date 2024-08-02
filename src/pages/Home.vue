<script lang="ts" setup>
import Pagination from "@/components/home_page/Pagination.vue";
import FilterButton from "@/components/home_page/FilterButton.vue";
import AnimalCard from "@/components/home_page/AnimalCard.vue";
import catIcon from "@/assets/home_page/cat.svg";
import dogIcon from "@/assets/home_page/dog.svg";
import { computed, ComputedRef, ref } from "vue";
import { Animal, useAnimals } from "@stores/animalStore.ts";
import { AnimalSpecies } from "@/enums/animal_species.ts";
import { useGlobalSearch } from "@stores/useGlobalSearch.ts";
import { storeToRefs } from "pinia";

const isDogSelect = ref(false);
const isCatSelect = ref(false);
const currentPage = ref(1);
const currentSpecie = ref("");

const globalSearch = useGlobalSearch();
const { search } = storeToRefs(globalSearch);

const animals = useAnimals({
  page: currentPage,
  specie: currentSpecie,
  name: search,
});

const animalesFiltered: ComputedRef<Animal[]> = computed(
  () => animals.data?.data ?? [],
);

const squareNumber: ComputedRef<number> = computed(
  () => animals.data?.totalPages ?? 3,
);

const selectDogs = async () => {
  if (isDogSelect.value) {
    isDogSelect.value = false;
    currentSpecie.value = "";
    currentPage.value = 1;
    return;
  }

  currentPage.value = 1;
  currentSpecie.value = AnimalSpecies.DOG;

  isDogSelect.value = true;
  isCatSelect.value = false;
};

const selectCats = async () => {
  if (isCatSelect.value) {
    isCatSelect.value = false;
    currentSpecie.value = "";
    currentPage.value = 1;
    return;
  }

  currentPage.value = 1;
  currentSpecie.value = AnimalSpecies.CAT;

  isCatSelect.value = true;
  isDogSelect.value = false;
};

const handleNextPage = async () => {
  if (currentPage.value === squareNumber.value) return;
  currentPage.value += 1;
};

const handlePreviousPage = async () => {
  if (currentPage.value === 1) return;
  currentPage.value -= 1;
};
</script>

<template>
  <div class="flex flex-col justify-center ml-12">
    <div class="mt-14 mb-5 flex items-center gap-3">
      <h2 class="text-2xl md:text-4xl font-medium m-0">Animalitos</h2>
    </div>
    <div class="flex items-center flex-wrap gap-3 mt-4 mb-7">
      <span class="font-semibold">Filtrar por especie:</span>
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
        v-for="animal in animalesFiltered"
        :key="animal.id"
        :to="`/pet-info/${animal.id}`"
        class="gap-x-5 flex md:gap-x-5 lg:gap-x-11 gap-y-9 flex-wrap mt-2"
      >
        <AnimalCard :animal="animal" />
      </RouterLink>
    </section>
    <div class="flex justify-center py-10">
      <Pagination
        :currentPage="currentPage"
        :pages="squareNumber"
        @nextPage="handleNextPage"
        @pageChange="async () => await animals.refetch()"
        @previousPage="handlePreviousPage"
      />
    </div>
  </div>
</template>
