<script lang="ts" setup>
import AnimalCard from "@/components/animals/AnimalCard.vue";
import { computed, ComputedRef, ref } from "vue";
import { Animal, useAnimals } from "@stores/animalStore.ts";
import { useGlobalSearch } from "@stores/useGlobalSearch.ts";
import { storeToRefs } from "pinia";

const currentPage = ref(1);
const currentSpecie = ref("");

const globalSearch = useGlobalSearch();
const { search } = storeToRefs(globalSearch);

const animals = useAnimals({
  page: currentPage,
  specie: currentSpecie,
  name: search,
});

const animales: ComputedRef<Animal[]> = computed(
  () => animals.data?.data ?? [],
);
</script>

<template>
  <div class="flex flex-col justify-center ml-12">
    <div class="mt-9 mb-5 flex items-center gap-3">
      <h2 class="text-2xl md:text-4xl font-medium m-0">Animalitos</h2>
    </div>
    <div class="flex items-center flex-wrap gap-3 mt-4 mb-10">
      <!-- TODO: Add create animal button -->
      <!-- TODO: Add animal filters here -->
    </div>

    <section
      class="gap-x-5 flex md:gap-x-5 lg:gap-x-10 gap-y-9 flex-wrap md:justify-center sm:justify-normal lg:justify-normal"
    >
      <RouterLink
        v-for="animal in animales"
        :key="animal.id"
        :to="`/pet-info/${animal.id}`"
        class="gap-x-5 flex md:gap-x-5 lg:gap-x-11 gap-y-9 flex-wrap"
      >
        <AnimalCard :animal="animal" />
      </RouterLink>
    </section>
    <div class="flex justify-center py-10">
      <!-- TODO: Add paginator here -->
    </div>
  </div>
</template>
