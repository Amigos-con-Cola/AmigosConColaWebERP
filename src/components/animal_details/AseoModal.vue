<script lang="ts" setup>
import ButtonAddAnimals from "./ButtonAddAnimals.vue";
import { ref } from "vue";

const fecha = ref("");
const lugar = ref("");
const tipo_aseo = ref("");
</script>

<template>
  <div
    id="aseo-modal"
    class="hidden fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    tabindex="-1"
  >
    <div class="relative w-[19rem] sm:w-[20rem] md:w-[25rem] lg:w-[40rem]">
      <div class="relative bg-white rounded-lg shadow p-2">
        <div class="p-5 text-center">
          <h3
            class="flex mb-5 text-gray-500 text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.5rem] font-extrabold"
          >
            Aseo
          </h3>

          <div class="flex items-center mb-5">
            <label
              class="mr-[0.5rem] sm:mr-[0.65rem] sm:w-[5.1rem] md:w-[6.3rem] lg:w-[8rem] md:mr-[1.3rem] lg:mr-[2.6rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              for="tipo"
              >Tipo de aseo:
            </label>

            <input
              id="tipo"
              v-model="tipo_aseo"
              class="border-primary text-gray-900 focus:border-primary-600 w-[9.9rem] sm:w-[10.8rem] lg:w-[25rem] md:w-[13.8rem] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.2rem] h-[2.9rem]"
              name="tipo"
              placeholder="Corte de pelo"
              type="text"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              class="mr-[3.1rem] md:mr-[4.7rem] sm:mr-[3.3rem] lg:mr-[7.1rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              for="lugar"
              >Lugar:
            </label>

            <input
              id="lugar"
              v-model="lugar"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10rem] lg:w-[25rem] md:w-[13.8rem] sm:w-[10.9rem] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.2rem] h-[2.9rem]"
              name="lugar"
              placeholder="Peluqueria..."
              type="text"
            />
          </div>

          <div class="flex items-center mb-6">
            <label
              class="mr-[3.1rem] sm:mr-[3.2rem] lg:mr-[7rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] md:mr-[4.6rem] lg:text-[1.2rem]"
              for="date"
              >Fecha:
            </label>

            <input
              id="date"
              v-model="fecha"
              class="border-primary text-gray-900 focus:border-primary-600 w-[35rem] lg:w-[25rem] md:w-[14rem] text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[1.1rem] h-[2.9rem]"
              name="date"
              type="date"
            />
          </div>
          <div
            class="flex border border-primary w-[16rem] sm:w-[16.6rem] md:w-[21.5rem] lg:w-[35.7rem] h-[6rem] mb-8 items-start text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.2rem]"
          >
            <div class="flex-1 ml-1">
              <h3
                class="flex font-bold m-3 lg:text-base sm:m-3 md:m-3 lg:m-3 text-[0.8rem] md:text-[0.9rem] sm:text-[0.9rem]"
              >
                Animales
              </h3>
            </div>
            <div>
              <ButtonAddAnimals />
            </div>
          </div>

          <button
            class="bg-surface drop-shadow font-normal border border-gray-200 hover:bg-gray-100 hover:text-primary hover:font-bold px-4 shadow-3xl rounded-full text-xs md:text-sm sm:text-sm sm:px-5 lg:text-md py-3 md:px-6 md:py-2.5 lg:px-8 lg:py-2.5 mr-4 sm:mr-10 md:mr-10 lg:mr-10 lg:text-base"
            data-modal-hide="aseo-modal"
            type="button"
          >
            Cancelar
          </button>
          <button
            class="bg-primary drop-shadow text-white hover:bg-primary/75 hover:font-bold font-medium px-5 shadow-3xl rounded-full text-xs md:text-sm sm:text-sm sm:px-5 lg:text-md py-3 md:px-6 md:py-2.5 lg:px-8 lg:py-2.5 lg:text-base"
            data-modal-hide="aseo-modal"
            type="button"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
