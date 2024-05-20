<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(["formValues"])


const perroIsSelect = ref<boolean>(false);
const gatoIsSelect = ref<boolean>(false);
const machoIsSelect = ref<boolean>(false);
const hembraIsSelect = ref<boolean>(false);
const primeraIsSelect = ref<boolean>(false);
const segundaIsSelect = ref<boolean>(false);
const terceraIsSelect = ref<boolean>(false);
const cuartaIsSelect = ref<boolean> (false);


const handlePerroClick = () =>{
  perroIsSelect.value = true;
  gatoIsSelect.value = false
  props.formValues.especie = "Perro"
}
const handleGatoClick = () =>{
  perroIsSelect.value = false;
  gatoIsSelect.value = true
  props.formValues.especie = "Gato"
}

const handleMachoClick = () =>{
  machoIsSelect.value = true;
  hembraIsSelect.value = false;
  props.formValues.genero = "Macho"
}

const handleHembraClick = () =>{
  machoIsSelect.value = false;
  hembraIsSelect.value = true;
  props.formValues.genero = "Hembra"
}

const handlePesoClick = (event: Event) =>{
  if(event.target === null) return
  const value = event.target.value;
  props.formValues.peso = value
  switch (value) {
    case "0-25 lbs":
      primeraIsSelect.value = true
      segundaIsSelect.value = false
      terceraIsSelect.value = false
      cuartaIsSelect.value = false
      break;
    case "25-50 lbs":
      primeraIsSelect.value = false
      segundaIsSelect.value = true
      terceraIsSelect.value = false
      cuartaIsSelect.value = false
      break;
    case "50-100 lbs":
      primeraIsSelect.value = false
      segundaIsSelect.value = false
      terceraIsSelect.value = true
      cuartaIsSelect.value = false
      break;
    case "100+ lbs":
      primeraIsSelect.value = false
      segundaIsSelect.value = false
      terceraIsSelect.value = false
      cuartaIsSelect.value = true
      break;
  }

}

const validateStep = () => {
  let isValid = true;
  const requiredFields = ['nombre', 'especie', 'edad', 'genero', 'ubicacion', 'codigo', 'peso', 'historiaOrigen'];
  requiredFields.forEach(field => {
    if (!props.formValues[field]) {
      isValid = false;
      document.getElementById(field)?.classList.add('border-red-500'); // Añadir clase para marcar campo
    } else {
      document.getElementById(field)?.classList.remove('border-red-500'); // Remover clase si el campo está lleno
    }
  });
  return isValid;
}

const handleNextClick = (e) => {
  e.preventDefault();
  if (validateStep()) {
    // Emitir evento para avanzar al siguiente paso solo si la validación pasa
    emits('next');
  }
}
</script>

<template>

    <form class="">
      <div class="grid gap-6 md:gap-x-24 mb-6 md:grid-cols-2 ">
        <div>
          <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
          <input v-model="props.formValues.nombre" type="text" id="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bruno" required />
        </div>
        <div class="md:col-start-1 md:row-start-2">
          <label for="edad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
          <input v-model="props.formValues.edad" type="text" id="edad" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entre 5 - 7 meses" required />
        </div>
        <div class="md:col-start-2">
          <label for="especie" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Especie</label>
          <div id="especie" class="text-sm font-semibold flex justify-around gap-2 items-center w-full border border-primary h-[3rem] ">
            <input @click="handlePerroClick"  :class="{' bg-primary w-full h-2/3 ml-3':perroIsSelect || props.formValues.especie === 'Perro','hover:bg-sky-300 w-full h-2/3 ml-3':!perroIsSelect }" type="button"  value="Perro"/>
            <input @click="handleGatoClick"  :class="{'bg-primary w-full  h-2/3 mr-3': gatoIsSelect || props.formValues.especie === 'Gato','hover:bg-sky-300 w-full  h-2/3 mr-3': !gatoIsSelect }" type="button" value="Gato"/>
          </div>
        </div>
        <div class="md:col-start-2">
          <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Género</label>
          <div id="genero" class="text-sm font-semibold flex justify-around gap-2 items-center w-full border border-primary h-[3rem] ">
            <input @click="handleMachoClick" id="macho" :class="{'bg-primary w-full h-2/3 ml-3': machoIsSelect || props.formValues.genero === 'Macho', 'hover:bg-sky-300 w-full h-2/3 ml-3': !machoIsSelect   }" type="button"  value="Macho"/>
            <input @click="handleHembraClick" id="hembra" :class="{'bg-primary w-full  h-2/3 mr-3': hembraIsSelect || props.formValues.genero === 'Hembra','hover:bg-sky-300 w-full  h-2/3 mr-3': !hembraIsSelect}" type="button" value="Hembra"/>
          </div>
        </div>
        <div>
          <label for="ubicacion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicación</label>
          <input v-model="props.formValues.ubicacion" type="text" id="ubicacion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Casa" required />
        </div>
        <div>
          <label for="codigo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Código</label>
          <input v-model="props.formValues.codigo" type="text" id="codigo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="F-23" required />
        </div>

      </div>
      <div>
        <label for="peso" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Peso</label>
        <div id="peso" class="text-sm font-semibold flex flex-col gap-5 justify-center w-full border border-primary h-max md:flex-row ">
          <input @click="handlePesoClick" :class="{'mx-2 bg-primary h-8  mt-5 md:mb-5 md:w-full': primeraIsSelect || props.formValues.peso === '0-25 lbs', 'hover:bg-sky-300 mx-2  h-8  mt-5 md:mb-5 md:w-full':!primeraIsSelect}" type="button" value="0-25 lbs"/>
          <input @click="handlePesoClick" :class="{'mx-2 bg-primary  h-8 md:mt-5 md:w-full': segundaIsSelect || props.formValues.peso === '25-50 lbs', 'hover:bg-sky-300 mx-2  h-8 md:mt-5 md:w-full':!segundaIsSelect}" type="button" value="25-50 lbs"/>
          <input @click="handlePesoClick" :class="{'mx-2 bg-primary  h-8 md:mt-5 md:w-full':terceraIsSelect || props.formValues.peso === '50-100 lbs', 'hover:bg-sky-300 mx-2  h-8 md:mt-5 md:w-full':!terceraIsSelect}" type="button" value="50-100 lbs"/>
          <input @click="handlePesoClick" :class="{'mx-2 bg-primary h-8 mb-5 md:mt-5 md:w-full': cuartaIsSelect || props.formValues.peso === '100+ lbs', 'hover:bg-sky-300 mx-2 h-8 mb-5 md:mt-5 md:w-full':!cuartaIsSelect}" type="button" value="100+ lbs"/>
        </div>
      </div>
      <div class="mt-5">
        <label for="origen" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Historia de origen</label>
        <textarea v-model="props.formValues.historiaOrigen" id="origen" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Fue encontrado en ..." required />
      </div>

    </form>
</template>

<style scoped>
textarea{
  resize: none;
}
</style>