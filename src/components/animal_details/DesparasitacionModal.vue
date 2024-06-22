<script lang="ts" setup></script>

<template>
  <div
    id="desparasitacion-modal"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
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
              class="mr-[5.2rem] sm:mr-[5.3rem] lg:mr-[8.9rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] md:mr-[1.5rem] lg:text-[1.35rem]"
              for="tipo"
              >Tipo:</label
            >
            <select
              id="tipo"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.4rem] sm:w-[10.5rem] md:w-[12.5rem] lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] lg:p-[0.7rem]"
            >
              <option value="interno">Interno</option>
              <option value="externo">Externo</option>
            </select>
          </div>

          <div class="flex items-center mb-5">
            <label
              class="mr-[4.6rem] sm:mr-[4.7rem] lg:mr-[7.8rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] md:mr-[1.5rem] lg:text-[1.35rem]"
              for="fecha"
              >Fecha:
            </label>

            <input
              id="fecha"
              class="border-primary text-gray-900 focus:border-primary-600 w-[10.4rem] sm:w-[10.5rem] md:w-[12.5rem] lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="fecha"
              type="date"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              class="mr-[3.5rem] md:mr-[4.2rem] sm:mr-[3.5rem] lg:mr-[5.8rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.35rem]"
              for="producto"
              >Producto:
            </label>
            <input
              id="producto"
              class="border-primary text-gray-900 focus:border-primary-600 lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="producto"
              placeholder="Activyl"
              type="text"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              class="mr-[1rem] md:mr-[1rem] sm:mr-[1rem] lg:mr-[0.05rem] flex w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.35rem]"
              for="peso"
              >Peso del animal:
            </label>
            <input
              id="peso"
              class="border-primary text-gray-900 focus:border-primary-600 lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="peso"
              placeholder="1 kg"
              type="text"
            />
          </div>

          <div class="flex items-center mb-5">
            <label
              class="mr-[3.7rem] md:mr-[4.4rem] sm:mr-[3.7rem] lg:mr-[6.2rem] font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.35rem]"
              for="formato"
              >Formato:
            </label>
            <input
              id="formato"
              class="border-primary mb-6 text-gray-900 focus:border-primary-600 lg:w-[25rem] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              name="formato"
              placeholder="Pastilla"
              type="text"
            />
          </div>

          <button
            class="bg-surface drop-shadow font-normal border border-gray-200 hover:bg-gray-100 hover:text-primary hover:font-bold px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-md py-3 md:px-6 md:py-3 lg:px-8 lg:py-2.5 mr-4 sm:mr-10 md:mr-10 lg:mr-10"
            data-modal-hide="desparacitacion-modal"
            type="button"
          >
            Cancelar
          </button>
          <button
            class="bg-primary drop-shadow text-white hover:bg-primary/75 hover:font-bold font-medium px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-md py-3 md:px-6 md:py-3 lg:px-8 lg:py-2.5"
            data-modal-hide="desparacitacion-modal"
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
