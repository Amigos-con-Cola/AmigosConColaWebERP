<script lang="ts" setup>
import AnimalCard from "@/components/animals/AnimalCard.vue";
import { ref, watchEffect } from "vue";
import { useAnimals } from "@stores/animalStore.ts";
import { useGlobalSearch } from "@stores/useGlobalSearch.ts";
import { storeToRefs } from "pinia";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import { useRouter } from "vue-router";
import ACSelectRadio from "@/components/common/ACSelectRadio.vue";
import PaginationControls from "@/components/common/PaginationControls.vue";
import { useSpinner } from "@stores/loadingSpinnerModalStore.ts";
import { refDebounced } from "@vueuse/core";

const currentPage = ref(1);
const currentSpecies = ref("");

const router = useRouter();

const globalSearch = useGlobalSearch();
const { search } = storeToRefs(globalSearch);
const searchDebounced = refDebounced(search);

const animals = useAnimals({
  page: currentPage,
  specie: currentSpecies,
  name: searchDebounced,
});

const spinner = useSpinner();
watchEffect(() => {
  if (animals.loading && !animals.error) {
    spinner.show();
  } else {
    spinner.close();
  }
});

const speciesFilters = [
  { id: 1, name: "Todos" },
  { id: 2, name: "Gato", filter: "Cat" },
  { id: 3, name: "Perro", filter: "Dog" },
];

const onSelectSpecies = (id: number) => {
  const species = speciesFilters.filter((x) => x.id === id)[0];
  if (species.name === "Todos") {
    currentSpecies.value = "";
  } else {
    currentSpecies.value = species.filter!;
  }
};
</script>

<template>
  <div class="flex flex-col justify-center ml-12">
    <div class="mt-9 flex items-center gap-3">
      <h2 class="text-2xl md:text-4xl font-medium m-0">Animalitos</h2>
    </div>
    <div class="flex items-center gap-3 mt-4 mb-4">
      <ACButtonPrimary
        class="flex items-center gap-2"
        @click="router.push({ name: 'crear-animal' })"
      >
        <span class="icon-[mdi--plus] text-xl"></span>
        Ingresar un animalito
      </ACButtonPrimary>
      <ACSelectRadio :items="speciesFilters" @select="onSelectSpecies">
        <div class="flex items-center gap-1">
          <span class="icon-[lucide--filter]"></span>
          Especie
        </div>
      </ACSelectRadio>
    </div>
    <section
      class="gap-x-5 flex md:gap-x-5 lg:gap-x-10 gap-y-9 flex-wrap md:justify-center sm:justify-normal lg:justify-normal"
    >
      <RouterLink
        v-for="animal in animals.data?.data"
        :key="animal.id"
        :to="`/animales/${animal.id}`"
        class="gap-x-5 flex md:gap-x-5 lg:gap-x-11 gap-y-9 flex-wrap"
      >
        <AnimalCard :animal="animal" />
      </RouterLink>
    </section>
    <div class="flex justify-center py-10">
      <PaginationControls
        :current-page="currentPage"
        :pages="animals?.data?.totalPages ?? 0"
        @select-page="(page) => (currentPage = page)"
      />
    </div>
  </div>
</template>
