<script lang="ts" setup>
import Tab from "@/components/Tab.vue";
import BasePetInfo from "@/components/pet_info/BasePetInfo.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useAnimals } from "@stores/animalStore.ts";

const animals = useAnimals();

const pet = ref<Pet>({
  codigo: "",
  nombre: "",
  edad: 0,
  especie: "",
  genero: "",
  ubicacion: "",
  peso: 0,
  adoptado: false,
  imagen: "",
});

interface Pet {
  codigo: string;
  nombre: string;
  edad: number;
  especie: string;
  genero: string;
  ubicacion: string;
  peso: number;
  adoptado: boolean;
  imagen: string;
}

const petId = ref();
const route = useRoute();
petId.value = route.params.id;

const getPetById = async () => {
  pet.value = await animals.getAnimalById(petId.value);
};

onMounted(() => {
  getPetById();
});

</script>

<template>
  <div
    class="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row items-center sm:mt-[3rem]"
  >
    <BasePetInfo :pet="pet" class="mr-5 mb-5 xl:mb-0 lg:mb-8 xl:mr-8" />
    <Tab class="mr-[0.75rem] mb-10 sm:mr-10 sm:h-[37.8rem] xl:m-0 lg:mb-8" />
  </div>
</template>

<style scoped></style>
