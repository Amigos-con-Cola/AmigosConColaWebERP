<script lang="ts" setup></script>

<template>
  <div
    id="vacuna-modal"
    class="hidden fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    tabindex="-1"
  >
    <div class="relative w-[8rem] sm:w-[20rem] md:w-[25rem] lg:w-[35rem]">
      <div class="relative bg-white rounded-lg shadow">
        <div class="p-14 text-center">
          <h3
            class="flex mb-8 text-gray-500 text-[1rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.7rem] font-extrabold"
          >
            Vacuna
          </h3>
          <h3
            class="flex mb-5 font-normal text-gray-900 text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.2rem]"
          >
            Examen previo
          </h3>

          <div class="flex items-center mb-5">
            <label
              class="mr-[0.5rem] md:mr-2 sm:mr-[1rem] lg:mr-[2.5rem] font-normal text-gray-900 text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.2rem]"
              for="name"
              >Nombre:
            </label>
            <input
              id="name"
              class="border-primary text-gray-900 focus:border-primary-600 w-full text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.2rem]"
              name="name"
              placeholder="Triple Felina"
              type="text"
            />
          </div>

          <div class="flex mb-5">
            <label
              class="mr-[1.3rem] sm:mr-[2rem] lg:mr-[3.7rem] font-normal text-gray-900 text-[0.8rem] sm:text-[1rem] md:text-[1rem] md:mr-[1.5rem] lg:text-[1.2rem]"
              for="fecha"
              >Fecha:
            </label>
            <input
              id="fecha"
              class="border-primary mb-6 text-gray-900 focus:border-primary-600 w-full text-[0.8rem] sm:[1.5rem] md:text-[1rem] lg:text-[1.3rem]"
              name="fecha"
              type="date"
            />
          </div>

          <button
            class="bg-surface font-medium border border-gray-200 hover:bg-gray-100 hover:text-primary px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-md py-3 md:px-6 md:py-3 lg:px-10 lg:py-3.5 mr-4 sm:mr-10 md:mr-10 lg:mr-10"
            data-modal-hide="vacuna-modal"
            type="button"
          >
            Cancelar
          </button>
          <button
            class="bg-primary text-white hover:bg-blue-500 font-medium px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-md py-3 md:px-6 md:py-3 lg:px-10 lg:py-3.5"
            data-modal-hide="vacuna-modal"
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
