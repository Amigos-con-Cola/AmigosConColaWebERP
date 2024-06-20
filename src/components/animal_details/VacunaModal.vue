<script lang="ts" setup>
import { useVacunas, Vaccine } from "@stores/vacunaStore.ts";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const vacunas = useVacunas();

const idAnimal = ref();
const route = useRoute();
const showSuccessToast = ref(false);
const showFailToast = ref(false);
idAnimal.value = route.params.id;

let examen_previo = ref("");
let nombre = ref("");
let fecha = ref("");

const vaccine = computed<Vaccine>(() => {
  return {
    name: nombre.value,
    date: fecha.value,
    examen_previo: examen_previo.value,
  };
});

const cleanModal = () => {
  examen_previo.value = "";
  nombre.value = "";
  fecha.value = "";
};

async function addVacuna() {
  let vacuna = await vacunas.postVacuna(vaccine.value, idAnimal.value);

  if (!vacuna) {
    showFailToast.value = true;
    setTimeout(() => {
      showFailToast.value = false;
    }, 3100);
    return;
  }
  showSuccessToast.value = true;
  setTimeout(() => {
    showSuccessToast.value = false;
  }, 3100);

  cleanModal();
  return;
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
    <p>Error al crear la vacuna</p>
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
    <p>Vacuna creada correctamente</p>
  </div>
  <div
    id="vacuna-modal"
    class="hidden fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    tabindex="-1"
  >
    <div class="relative w-[8rem] sm:w-[20rem] md:w-[25rem] lg:w-[35rem]">
      <div class="relative bg-white rounded-lg shadow">
        <div class="px-12 py-9 text-center">
          <h3
            class="flex mb-5 text-gray-500 text-[1rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.4rem] font-extrabold"
          >
            Vacuna
          </h3>

          <div class="flex items-center mb-4">
            <label
              class="mr-[0.5rem] md:mr-2 sm:mr-[1rem] lg:mr-[0.3rem] w-52 flex font-normal text-gray-900 text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem]"
              for="previous-exam"
              >Examen previo:
            </label>
            <input
              id="previous-exam"
              v-model="examen_previo"
              class="border-primary text-gray-900 focus:border-primary-600 w-full text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem]"
              name="previous-exam"
              placeholder="Examen previo"
              type="text"
            />
          </div>

          <div class="flex items-center mb-4">
            <label
              class="mr-[0.5rem] md:mr-2 sm:mr-[1rem] lg:mr-[4.6rem] font-normal text-gray-900 text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem]"
              for="name"
              >Nombre:
            </label>
            <input
              id="name"
              v-model="nombre"
              class="border-primary text-gray-900 focus:border-primary-600 w-full text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem]"
              name="name"
              placeholder="Triple Felina"
              type="text"
            />
          </div>

          <div class="flex items-center">
            <label
              class="mr-[0.5rem] md:mr-2 sm:mr-[1rem] lg:mr-[5.6rem] font-normal text-gray-900 text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem]"
              for="date"
              >Fecha:
            </label>
            <input
              id="date"
              v-model="fecha"
              class="border-primary text-gray-900 focus:border-primary-600 w-full text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem]"
              name="date"
              type="date"
            />
          </div>

          <div class="mt-8">
            <button
              class="bg-surface drop-shadow font-normal border border-gray-200 hover:bg-gray-100 hover:text-primary hover:font-bold px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-md py-3 md:px-6 md:py-3 lg:px-8 lg:py-2.5 mr-4 sm:mr-10 md:mr-10 lg:mr-10"
              data-modal-hide="vacuna-modal"
              type="button"
            >
              Cancelar
            </button>
            <button
              class="bg-primary drop-shadow text-white hover:bg-primary/75 hover:font-bold font-medium px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-md py-3 md:px-6 md:py-3 lg:px-8 lg:py-2.5"
              data-modal-hide="vacuna-modal"
              type="button"
              @click="addVacuna"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
