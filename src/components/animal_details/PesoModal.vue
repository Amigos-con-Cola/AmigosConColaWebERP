<script lang="ts" setup></script>

<template>
  <div
    id="peso-modal"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    tabindex="-1"
  >
    <div class="relative w-[22rem] sm:w-[23rem] md:w-[27rem] lg:w-[30rem]">
      <div class="relative bg-white rounded-lg shadow p-5">
        <div class="p-5 text-center">
          <h3
            class="flex mb-5 text-gray-500 text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.5rem] font-extrabold"
          >
            Peso
          </h3>

          <div class="flex items-center mb-5">
            <label
              class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.35rem]"
              for="peso"
              >Peso del animal:
            </label>

            <input
              id="peso"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.7rem] lg:w-[12rem] sm:w-[10.7rem] md:w-[14rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="peso"
              placeholder="1 kg"
              type="number"
              step="0.01"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              class="mr-[4rem] sm:mr-[4.7rem] lg:mr-[8.9rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] md:mr-[6.5rem] lg:text-[1.35rem]"
              for="fecha"
              >Fecha:
            </label>

            <input
              id="fecha"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.9rem] sm:w-[10.5rem] md:w-[13rem] lg:w-[12rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="fecha"
              type="date"
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
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
