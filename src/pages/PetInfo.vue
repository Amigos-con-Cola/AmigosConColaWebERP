<script lang="ts" setup>
import Tab from "@/components/Tab.vue";
import BasePetInfo from "@/components/pet_info/BasePetInfo.vue";
import { onMounted, ref } from "vue";
import animalsJSON from "@/fakedata.json";
import { useRoute } from "vue-router";

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
const route = useRoute(); // Usa useRoute para acceder a la ruta actual
petId.value = route.params.id; // Asigna el valor de route.params.id a petId.value

const getPetById = () => {
  const animal = animalsJSON.filter(
    (animal) => animal.id === parseInt(petId.value),
  )[0];
  pet.value.codigo = `XYZ${petId.value}`;
  pet.value.nombre = animal.nombre;
  pet.value.edad = animal.edad;
  pet.value.especie = animal.tipo;
  pet.value.genero = animal.genero;
  pet.value.ubicacion = "xdr";
  pet.value.peso = 50;
  pet.value.adoptado = animal.estado;
  pet.value.imagen = animal.imagen;
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
