<script lang="ts" setup>
import { ref } from "vue";
import ButtonAddAnimals from "./ButtonAddAnimals.vue";
const isModalVisible = ref(false);
const openModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <div>
    <div class="flex items-center">
      <button
        @click="openModal"
        type="button"
        class="flex items-center bg-primary px-7 shadow-3xl hover:bg-blue-400 rounded-full text-xs md:text-base sm:text-base sm:px-8 lg:text-xl py-3 md:px-9 md:py-4 lg:px-12 lg:py-5 font-semibold"
      >
        <svg
          class="w-4 md:w-5 sm:w-6 lg:w-8 mr-2 text-black"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14m-7 7V5"
          />
        </svg>
        <h3 class="text-black">Agregar</h3>
      </button>
    </div>
  </div>
  <div
    v-if="isModalVisible"
    id="popup-modal"
    tabindex="-1"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
  >
    <div class="relative w-[19rem] sm:w-[20rem] md:w-[25rem] lg:w-[40rem]">
      <div class="relative bg-white rounded-lg shadow">
        <div class="p-5 text-center">
          <h3
            class="flex mb-5 text-gray-500 text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] font-extrabold"
          >
            Aseo
          </h3>

          <div class="flex items-center mb-5">
            <label
              for="tipo"
              class="mr-[0.5rem] sm:mr-[1rem] md:mr-5 lg:mr-[2rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              >Tipo de aseo:
            </label>
            <input
              type="text"
              name="tipo"
              id="tipo"
              class="border-primary text-gray-900 focus:border-primary-600 lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              placeholder="Corte de pelo"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              for="lugar"
              class="mr-[3.1rem] md:mr-[4.6rem] sm:mr-[3.7rem] lg:mr-[7rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              >Lugar:
            </label>
            <input
              type="text"
              name="lugar"
              id="lugar"
              class="border-primary text-gray-900 focus:border-primary-600 lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              placeholder="Peluqueria ..."
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              for="fecha"
              class="mr-[3.1rem] md:mr-[4.5rem] sm:mr-[3.6rem] lg:mr-[7rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] md:mr-[1.5rem] lg:text-[1.5rem]"
              >Fecha:
            </label>

            <input
              type="date"
              name="fecha"
              id="fecha"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.4rem] sm:w-[10.5rem] md:w-[12.5rem] lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
            />
          </div>
          <div
            class="flex border border-primary w-[16rem] sm:w-[16.6rem] md:w-[20.1rem] lg:w-[36.6rem] h-[6rem] mb-8 items-start text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.2rem]"
          >
            <div class="flex-1">
              <h3 class="flex font-bold m-3 sm:m-3 md:m-3 lg:m-3">Animales</h3>
            </div>
            <div>
              <ButtonAddAnimals />
            </div>
          </div>

          <button
            @click="closeModal"
            type="button"
            class="bg-surface font-medium border border-gray-200 hover:bg-gray-100 hover:text-primary px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-xl py-3 md:px-6 md:py-3 lg:px-12 lg:py-5 mr-4 sm:mr-10 md:mr-10 lg:mr-10 sm:mr-4"
          >
            Cancelar
          </button>
          <button
            @click="closeModal"
            type="button"
            class="bg-primary text-white hover:bg-blue-500 font-medium px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-xl py-3 md:px-6 md:py-3 lg:px-12 lg:py-5"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
