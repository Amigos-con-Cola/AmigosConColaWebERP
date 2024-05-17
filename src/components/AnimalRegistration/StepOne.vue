<script setup lang="ts">

import StepperIndicator from "@/components/AnimalRegistration/StepperIndicator.vue";
</script>

<template>
  <div class="flex flex-col ">
    <h2 class="text-2xl md:text-4xl font-bold m-0">Registro de animal</h2>
    <StepperIndicator/>
    <section class="">
      <div class="grid gap-6 md:gap-x-32 mb-6 md:grid-cols-2 ">
        <div>
          <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
          <input type="text" id="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bruno" required />
        </div>
        <div class="md:col-start-1 md:row-start-2">
          <label for="edad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
          <input type="text" id="edad" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entre 5 - 7 meses" required />
        </div>
        <div class="md:col-start-2">
          <label for="especie" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Especie</label>
          <div id="especie" class="text-sm font-semibold flex justify-around gap-2 items-center w-full border border-primary h-[3rem] ">
            <input class="bg-primary w-full h-2/3 ml-3 " type="button"  value="Perro"/>
            <input class="w-full bg-primary h-2/3 mr-3" type="button" value="Gato"/>
          </div>
        </div>
        <div class="md:col-start-2">
          <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Género</label>
          <div id="genero" class="text-sm font-semibold flex justify-around gap-2 items-center w-full border border-primary h-[3rem] ">
            <input class="bg-primary w-full h-2/3 ml-3 " type="button"  value="Macho"/>
            <input class="w-full bg-primary h-2/3 mr-3" type="button" value="Hembra"/>
          </div>
        </div>
        <div>
          <label for="ubicacion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicación</label>
          <input type="text" id="ubicacion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Casa" required />
        </div>
        <div>
          <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Código</label>
          <input type="text" id="codigo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="F-23" required />
        </div>

      </div>
      <div>
        <label for="peso" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Peso</label>
        <div id="peso" class="text-sm font-semibold flex flex-col gap-5 justify-center w-full border border-primary h-max md:flex-row ">
          <input class="mx-2 bg-primary h-8  mt-5 md:mb-5 md:w-full" type="button" value="0-25 lbs"/>
          <input class="mx-2 bg-primary h-8 md:mt-5 md:w-full" type="button" value="25-50 lbs"/>
          <input class="mx-2 bg-primary h-8 md:mt-5 md:w-full" type="button" value="50-100 lbs"/>
          <input class="mx-2 bg-primary h-8 mb-5 md:mt-5 md:w-full" type="button" value="100+ lbs"/>
        </div>
      </div>
      <div class="mt-5">
        <label for="origen" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Historia de origen</label>
        <textarea  id="origen" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Fue encontrado en ..." required />
      </div>
    </section>
  </div>
</template>

<style scoped>
textarea{
  resize: none;
}
</style>