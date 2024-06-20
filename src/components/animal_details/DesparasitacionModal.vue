<script lang="ts" setup></script>

<template>
  <div
    id="desparasitacion-modal"
    tabindex="-1"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
  >
    <div class="relative w-[22rem] sm:w-[23rem] md:w-[25rem] lg:w-[40rem]">
      <div class="relative bg-white rounded-lg shadow">
        <div class="p-5 text-center">
          <h3
            class="flex mb-5 text-gray-500 text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] font-extrabold"
          >
            Desparasitación
          </h3>

          <div class="flex items-center mb-5">
            <label
              for="tipo"
              class="mr-[5.2rem] md:mr-[6.5rem] sm:mr-[5.3rem] lg:mr-[8.9rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] md:mr-[1.5rem] lg:text-[1.5rem]"
              >Tipo:</label
            >
            <select
              id="tipo"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.4rem] sm:w-[10.5rem] md:w-[12.5rem] lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem] lg:p-[0.7rem]"
            >
              <option value="interno">Interno</option>
              <option value="externo">Externo</option>
            </select>
          </div>

          <div class="flex items-center mb-5">
            <label
              for="fecha"
              class="mr-[4.6rem] md:mr-[5.6rem] sm:mr-[4.7rem] lg:mr-[7.8rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] md:mr-[1.5rem] lg:text-[1.5rem]"
              >Fecha:
            </label>

            <input
              type="date"
              name="fecha"
              id="fecha"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.4rem] sm:w-[10.5rem] md:w-[12.5rem] lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              for="producto"
              class="mr-[3.5rem] md:mr-[4.2rem] sm:mr-[3.5rem] lg:mr-[5.6rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              >Producto:
            </label>
            <input
              type="text"
              name="producto"
              id="producto"
              class="border-primary text-gray-900 focus:border-primary-600 lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              placeholder="Activyl"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              for="peso"
              class="mr-[1rem] md:mr-[1rem] sm:mr-[1rem] lg:mr-[1rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              >Peso del animal:
            </label>
            <input
              type="text"
              name="peso"
              id="peso"
              class="border-primary text-gray-900 focus:border-primary-600 lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              placeholder="1 kg"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              for="formato"
              class="mr-[3.7rem] md:mr-[4.4rem] sm:mr-[3.7rem] lg:mr-[6rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              >Formato:
            </label>
            <input
              type="text"
              name="formato"
              id="formato"
              class="border-primary text-gray-900 focus:border-primary-600 lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
              placeholder="Pastilla"
            />
          </div>

          <button
            @click=""
            type="button"
            class="bg-surface font-medium border border-gray-200 hover:bg-gray-100 hover:text-primary px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-xl py-3 md:px-6 md:py-3 lg:px-12 lg:py-5 mr-4 sm:mr-10 md:mr-10 lg:mr-10 sm:mr-4"
          >
            Cancelar
          </button>
          <button
            @click=""
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