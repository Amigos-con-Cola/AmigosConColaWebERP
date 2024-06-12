<script lang="ts" setup>
import { useVacunas, Vaccine} from "@stores/vacunaStore.ts";
import {ref} from "vue";
import {useRoute} from "vue-router";

const vacunas = useVacunas();


const idAnimal = ref();
const route = useRoute();
idAnimal.value = route.params.id;

let examen_previo = ref("");
let nombre = ref("");
let fecha = ref("");

const vaccine: Vaccine= {
  name: nombre.value,
  date:{
    day: parseInt(fecha.value.split("-")[2]),
    month: parseInt(fecha.value.split("-")[1]),
    year: parseInt(fecha.value.split("-")[0]),
    dayOfWeek: 1
  },
  examen_previo: examen_previo.value,
}

async function addVacuna() {
  console.log(typeof fecha.value.split("-")[2])
  let vacuna = await vacunas.postVacuna(vaccine,idAnimal.value);
  console.log(vacuna);
}


</script>

<template>
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
                class="border-primary text-gray-900 focus:border-primary-600 w-full text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem]"
                name="previous-exam"
                placeholder="Examen previo"
                type="text"
                v-model="examen_previo"
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
              class="border-primary text-gray-900 focus:border-primary-600 w-full text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem]"
              name="name"
              placeholder="Triple Felina"
              type="text"
              v-model="nombre"
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
                class="border-primary text-gray-900 focus:border-primary-600 w-full text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem]"
                name="date"
                type="date"
                v-model="fecha"
            />
          </div>

          <div class="mt-8">
            <button
                class="bg-surface drop-shadow	font-normal border border-gray-200 hover:bg-gray-100 hover:text-primary hover:font-bold px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-md py-3 md:px-6 md:py-3 lg:px-8 lg:py-2.5 mr-4 sm:mr-10 md:mr-10 lg:mr-10"
                data-modal-hide="vacuna-modal"
                type="button"
            >
              Cancelar
            </button>
            <button
                class="bg-primary drop-shadow	text-white hover:bg-primary/75 hover:font-bold font-medium px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-md py-3 md:px-6 md:py-3 lg:px-8 lg:py-2.5"
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
