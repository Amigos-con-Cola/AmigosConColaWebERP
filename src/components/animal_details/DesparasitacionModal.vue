<script lang="ts" setup>
import {
  Deworming,
  useDesparasitaciones,
} from "@stores/desparasitacionStore.ts";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const idAnimal = ref();
const route = useRoute();
const showSuccessToast = ref(false);
const showFailToast = ref(false);
idAnimal.value = route.params.id;

const desparasitaciones = useDesparasitaciones(parseInt(idAnimal.value));

let tipo = ref("");
let fecha = ref("");
let producto = ref("");
let peso = ref(0);
let formato = ref("");

const deworming = computed<Deworming>(() => {
  return {
    tipo: tipo.value,
    fecha: fecha.value,
    producto: producto.value,
    peso: peso.value,
    formato: formato.value,
  };
});

const cleanModal = () => {
  tipo.value = "";
  fecha.value = "";
  producto.value = "";
  peso.value = 0;
  formato.value = "";
};

async function addDeworming() {
  try {
    await desparasitaciones.create({
      deworming: deworming.value,
      idAnimal: idAnimal.value,
    });

    showSuccessToast.value = true;
    setTimeout(() => (showSuccessToast.value = false), 3100);

    cleanModal();
  } catch (error) {
    showFailToast.value = true;
    setTimeout(() => (showFailToast.value = false), 3100);
  }
}
</script>

<template>
  <div
    v-if="showFailToast"
    id="toast-bottom-right"
    class="items-center justify-start flex-shrink-0 h-10 text-orange-500 bg-orange-100 rounded-lg fixed flex w-full max-w-xs p-4 space-x-4 divide-x rtl:divide-x-reverse divide-gray-200 shadow right-5 top-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
    role="alert"
  >
    <svg
      aria-hidden="true"
      class="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"
      />
    </svg>
    <span class="sr-only">Warning icon</span>
    <p>Error al crear la desparasitación</p>
  </div>
  <div
    v-if="showSuccessToast"
    id="toast-bottom-right"
    class="justify-start flex-shrink-0 h-10 text-green-500 bg-green-100 rounded-lg fixed flex items-center w-full max-w-xs p-4 space-x-4 divide-x rtl:divide-x-reverse divide-gray-200 shadow right-5 top-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
    role="alert"
  >
    <svg
      aria-hidden="true"
      class="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
      />
    </svg>
    <span class="sr-only">Check icon</span>
    <p>Desparasitación creada correctamente</p>
  </div>
  <div
    id="desparasitacion-modal"
    class="hidden fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    tabindex="-1"
  >
    <div class="relative w-[22rem] sm:w-[23rem] md:w-[25rem] lg:w-[40rem]">
      <div class="relative bg-white rounded-lg shadow p-5">
        <div class="p-5 text-center">
          <h3
            class="flex mb-5 text-gray-500 text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.5rem] font-extrabold"
          >
            Desparasitación
          </h3>

          <div class="flex items-center mb-5">
            <label
              class="mr-[4.7rem] sm:mr-[5.5rem] lg:mr-[8.9rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] md:mr-[3.7rem] lg:text-[1.35rem]"
              for="tipo"
              >Tipo:</label
            >

            <select
              id="tipo"
              v-model="tipo"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.8rem] sm:w-[10.5rem] md:w-[26rem] lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] lg:p-[0.7rem]"
            >
              <option value="interno">Interno</option>
              <option value="externo">Externo</option>
            </select>
          </div>

          <div class="flex items-center mb-5">
            <label
              class="mr-[4rem] sm:mr-[4.7rem] lg:mr-[7.8rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] md:mr-[2.9rem] lg:text-[1.35rem]"
              for="date"
              >Fecha:
            </label>

            <input
              id="date"
              v-model="fecha"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.9rem] sm:w-[10.5rem] md:w-[25rem] lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="date"
              type="date"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              class="mr-[2.8rem] md:mr-[1.5rem] sm:mr-[3.5rem] lg:mr-[5.8rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.35rem]"
              for="producto"
              >Producto:
            </label>

            <input
              id="product"
              v-model="producto"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.6rem] lg:w-[25rem] md:w-[14.1rem] sm:w-[10.6rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="product"
              placeholder="Activyl"
              type="text"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.35rem]"
              for="peso"
              >Peso del animal:
            </label>

            <input
              id="weight"
              v-model="peso"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.7rem] lg:w-[25rem] sm:w-[10.7rem] md:w-[14rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="weight"
              placeholder="1 kg"
              step="0.01"
              type="number"
            />
          </div>

          <div class="flex items-center mb-6">
            <label
              class="mr-[3rem] md:mr-[1.7rem] sm:mr-[3.7rem] lg:mr-[6.2rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.35rem]"
              for="formato"
              >Formato:
            </label>

            <input
              id="format"
              v-model="formato"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.6rem] lg:w-[25rem] md:w-[14rem] sm:w-[10.7rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="format"
              placeholder="Pastilla"
              type="text"
            />
          </div>

          <button
            class="bg-surface drop-shadow font-normal border border-gray-200 hover:bg-gray-100 hover:text-primary hover:font-bold px-5 shadow-3xl rounded-full text-xs sm:py-2.5 md:text-[0.9rem] sm:text-[0.79rem] sm:px-5 lg:text-md py-3 md:px-6 md:py-2.5 lg:px-8 lg:py-4 mr-4 sm:mr-10 md:mr-10 lg:mr-10"
            data-modal-hide="desparasitacion-modal"
            type="button"
          >
            Cancelar
          </button>
          <button
            class="bg-primary drop-shadow text-white hover:bg-primary/75 hover:font-bold font-medium shadow-3xl rounded-full text-xs md:text-[0.9rem] sm:text-[0.79rem] sm:py-2 sm:text-base sm:px-6 lg:text-md py-3 px-5 md:px-6 md:py-2.5 lg:px-8 lg:py-3"
            data-modal-hide="desparasitacion-modal"
            type="button"
            @click="addDeworming"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
