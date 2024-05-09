<script lang="ts" setup>
import AddButton from "../components/AddButton.vue"
import SearchInput from "../components/SearchInput.vue"
import FilterButton from "../components/FilterButton.vue"
import AnimalCard from "../components/AnimalCard.vue"
import animalsJSON from "../fakedata.json"
import { ref, watch } from "vue"


export interface Animal {
  id: number
  nombre: string
  edad: number
  genero: string
  imagen: string
  estado: boolean
  tipo: string
}
const animales: Animal[] = ref(animalsJSON)
const search = ref("")

watch(search, () => {
  animales.value = animalsJSON.filter(animal => animal.nombre.toLowerCase().includes(search.value.toLowerCase()))
})

const selectDogs = () => {
  animales.value = animalsJSON.filter(animal => animal.tipo === "Perro")
}

const selectCats = () => {
  animales.value = animalsJSON.filter(animal => animal.tipo === "Gato")
}



</script>


<template>
  <div class="flex justify-end items-center gap-3 mx-4 mt-5">
    <SearchInput v-model="search" />
    <AddButton>Registrar animal</AddButton>
  </div>
  <div class="mt-5 ml-5 flex  items-center gap-3 ">

    <h2 class="text-2xl md:text-4xl font-bold m-0">Categorías</h2>
    <img class="mt-1 md:mt-2 size-4 md:size-6" src="/bell.svg" alt="notification bell">

  </div>
  <div class="flex gap-3 mx-5 mt-2">
    <FilterButton icon="/filter.svg" text="Filtrar" />
    <FilterButton @click="selectDogs" icon="/dog.svg" text="Perros" />
    <FilterButton @click="selectCats" icon="/cat.svg" text="Gatos" />
  </div>
  <section class="grid gap-3 md:grid-cols-4 mx-5 mt-2">

    <AnimalCard v-for="(animal, index) in animales" :id="animal.id" :animal="animal" :data-index="index" />
  </section>
</template>
