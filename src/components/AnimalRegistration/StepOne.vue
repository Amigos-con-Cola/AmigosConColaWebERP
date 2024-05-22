<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps(["formValues"]);

const perroIsSelect = ref<boolean>(false);
const gatoIsSelect = ref<boolean>(false);
const machoIsSelect = ref<boolean>(false);
const hembraIsSelect = ref<boolean>(false);

const handlePerroClick = () => {
  perroIsSelect.value = true;
  gatoIsSelect.value = false;
  props.formValues.especie = "Perro";
};
const handleGatoClick = () => {
  perroIsSelect.value = false;
  gatoIsSelect.value = true;
  props.formValues.especie = "Gato";
};

const handleMachoClick = () => {
  machoIsSelect.value = true;
  hembraIsSelect.value = false;
  props.formValues.genero = "Macho";
};

const handleHembraClick = () => {
  machoIsSelect.value = false;
  hembraIsSelect.value = true;
  props.formValues.genero = "Hembra";
};
</script>

<template>
  <div class="grid gap-6 md:gap-x-24 md:gap-y-5 mb-6 md:grid-cols-2">
    <div class="md:flex md:items-center md:space-x-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
        for="nombre"
        >Nombre</label
      >

      <input
        id="nombre"
        v-model="props.formValues.nombre"
        class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5"
        placeholder="Bruno"
        required
        type="text"
      />
    </div>

    <div
      class="md:col-start-1 md:row-start-2 md:flex md:items-center md:space-x-4"
    >
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
        for="edad"
        >Edad</label
      >
      <input
        id="edad"
        v-model="props.formValues.edad"
        class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Entre 5 - 7 meses"
        required
        type="text"
      />
    </div>

    <div class="md:col-start-2 md:flex md:items-center md:space-x-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 md:mb-0 md:w-24"
        for="especie"
        >Especie</label
      >
      <div
        id="especie"
        class="text-sm font-semibold flex justify-around gap-2 items-center w-full border border-primary h-10"
      >
        <input
          :class="{
            'bg-primary w-full h-2/3 ml-3':
              perroIsSelect || props.formValues.especie === 'Perro',
            'hover:bg-sky-300 w-full h-2/3 ml-3': !perroIsSelect,
          }"
          type="button"
          value="Perro"
          @click="handlePerroClick"
        />
        <input
          :class="{
            'bg-primary w-full h-2/3 mr-3':
              gatoIsSelect || props.formValues.especie === 'Gato',
            'hover:bg-sky-300 w-full h-2/3 mr-3': !gatoIsSelect,
          }"
          type="button"
          value="Gato"
          @click="handleGatoClick"
        />
      </div>
    </div>

    <div class="md:col-start-2 md:flex md:items-center md:space-x-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
        for="genero"
        >Género</label
      >
      <div
        id="genero"
        class="text-sm font-semibold flex justify-around gap-2 items-center w-full border border-primary h-10"
      >
        <input
          id="macho"
          :class="{
            'bg-primary w-full h-2/3 ml-3':
              machoIsSelect || props.formValues.genero === 'Macho',
            'hover:bg-sky-300 w-full h-2/3 ml-3': !machoIsSelect,
          }"
          type="button"
          value="Macho"
          @click="handleMachoClick"
        />
        <input
          id="hembra"
          :class="{
            'bg-primary w-full h-2/3 mr-3':
              hembraIsSelect || props.formValues.genero === 'Hembra',
            'hover:bg-sky-300 w-full h-2/3 mr-3': !hembraIsSelect,
          }"
          type="button"
          value="Hembra"
          @click="handleHembraClick"
        />
      </div>
    </div>

    <div class="md:flex md:items-center md:space-x-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
        for="ubicacion"
        >Ubicación</label
      >
      <input
        id="ubicacion"
        v-model="props.formValues.ubicacion"
        class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Casa"
        required
        type="text"
      />
    </div>

    <div class="md:flex md:items-center md:space-x-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
        for="codigo"
        >Código</label
      >
      <input
        id="codigo"
        v-model="props.formValues.codigo"
        class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="F-23"
        required
        type="text"
      />
    </div>

    <div class="md:flex md:items-center md:space-x-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
        for="peso"
        >Peso</label
      >
      <input
        id="peso"
        v-model="props.formValues.peso"
        class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="1"
        placeholder="50"
        required
        type="number"
      />
    </div>
  </div>

  <div class="mt-5">
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for="origen"
      >Historia de origen</label
    >
    <textarea
      id="origen"
      v-model="props.formValues.historiaOrigen"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Fue encontrado en ..."
      required
    />
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>
