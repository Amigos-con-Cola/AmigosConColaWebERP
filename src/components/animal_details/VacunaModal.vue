<script lang="ts" setup>
</script>

<template>
  <div
    id="popup-modal"
    tabindex="-1"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
    <div class="relative w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[35rem]">
      <div class="relative bg-white rounded-lg shadow">
        <div class="p-5 text-center">
          <h3 class="flex mb-5 text-gray-500 text-[1rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] font-extrabold ">Vacuna</h3>
          <h3 for="name" class="flex mb-5 font-medium text-gray-900 text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.5rem]">Examen previo</h3>
      
            <div class="flex items-center mb-5">
                <label for="name" class="mr-[0.5rem] md:mr-2 sm:mr-[1rem] lg:mr-[2rem] font-medium text-gray-900 text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.5rem]"
                  >Nombre:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="border-primary text-gray-900 focus:border-primary-600  w-full text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.5rem]"
                  placeholder="Triple Felina"
                />
            </div>

            <div class="flex items-center mb-5">
                <label for="fecha" class="mr-[1.3rem] md:mr-2 sm:mr-[2rem] lg:mr-[3.5rem] font-medium text-gray-900 text-[0.8rem] sm:text-[1rem] md:text-[1rem] md:mr-[1.5rem] lg:text-[1.5rem]"
                  >Fecha:
                </label>

              <input
                type="date"
                name="fecha"
                id="fecha"
                class="border-primary text-gray-900 focus:border-primary-600  w-full
               text-[0.8rem] sm:[1.5rem] md:text-[1rem] lg:text-[1.5rem]"
              />
            </div>

          <button
            @click=""
            type="button"
            class="bg-surface font-medium border border-gray-200 hover:bg-gray-100 hover:text-primary
            px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-xl py-3 md:px-6 md:py-3 lg:px-12 lg:py-5 mr-4 sm:mr-10 md:mr-10 lg:mr-10 sm:mr-4"
          >
            Cancelar
          </button>
          <button
            @click=""
            type="button"
            class="bg-primary text-white hover:bg-blue-500 font-medium
            px-4 shadow-3xl rounded-full text-xs md:text-base sm:text-base sm:px-5 lg:text-xl py-3 md:px-6 md:py-3 lg:px-12 lg:py-5"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>