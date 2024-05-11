<script lang="ts" setup>
import logoUrl from "../assets/images/amigos-con-cola-logo.png";
</script>

<template>
  <div
    class="background flex items-center justify-end pr-6 sm:pr-10 md:pr-20 lg:pr-32 h-screen"
  >
    <div class="flex flex-col items-center">
      <h1
        class="text-surface text-2xl sm:text-2xl md:text-3xl lg:text-[5rem] font-extrabold sm:mb-px lg:mb-12"
      >
        Amigos Con Cola
      </h1>
      <div class="img-logo">
        <img
          class="w-32 sm:w-32 md:w-40 lg:w-60 lg:mb-5 sm:mb-px"
          :src="logoUrl"
          alt="Amigos con cola"
        />
      </div>
      <div>
        <h2
          class="text-surface text-2xl sm:text-2xl md:text-3xl lg:text-[5rem] font-extrabold sm:mb-0 lg:mb-5"
        >
          Bienvenido
        </h2>
      </div>
      <div class="btn-container mt-6">
        <button
          type="button"
          class="text-surface bg-blue-500 hover:bg-blue-400 rounded-full text-xs sm:text-xs lg:text-xl px-5 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5"
        >
          INICIAR
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url(../assets/images/dog.jpg);
  background-size: 100% 100%;
}
</style>
