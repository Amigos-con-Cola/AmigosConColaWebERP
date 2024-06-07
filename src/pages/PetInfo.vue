<script lang="ts" setup>
import Tab from "@/components/Tab.vue";
import BasePetInfo from "@/components/pet_info/BasePetInfo.vue";
import { onMounted, ref } from "vue";
import { Animal } from "@/stores/animalStore";
import { useAnimals } from "@/stores/animalStore";
import { useRoute } from "vue-router";

const api = useAnimals();

const animalResult = ref<Animal | null>(null);

const petId = ref();
const route = useRoute(); // Usa useRoute para acceder a la ruta actual
petId.value = route.params.id; // Asigna el valor de route.params.id a petId.value

const getPetById = async () => {
  const animal: Animal | null = await api.getAnimalById(petId.value);
  if (!animal) {
    return;
  }
  animalResult.value = animal;
};

onMounted(() => {
  getPetById();
});
</script>

<template>
  <div
    class="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row items-center sm:mt-[3rem]"
  >
    <BasePetInfo
      :pet="animalResult"
      class="mr-5 mb-5 xl:mb-0 lg:mb-8 xl:mr-8"
    />
    <Tab class="mr-[0.75rem] mb-10 sm:mr-10 sm:h-[37.8rem] xl:m-0 lg:mb-8" />
  </div>
</template>

<style scoped></style>
