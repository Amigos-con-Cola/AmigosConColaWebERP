<script lang="ts" setup>
import logoUrl from "../assets/images/amigos-con-cola-logo.png";
</script>

<template>
  <div
    class="background flex items-center justify-end pr-6 sm:pr-10 md:pr-20 lg:pr-32 h-screen"
  >
    <div class="flex flex-col items-center">
      <h1
        class="text-surface text-xl sm:text-4xl md:text-[2.5rem] lg:text-[3.5rem] font-extrabold sm:mb-px lg:mb-12"
      >
        Amigos con cola
      </h1>
      <div class="img-logo">
        <img
          class="w-24 sm:w-32 md:w-36 lg:w-[11rem] lg:h-[11rem] lg:mb-5 sm:mb-px"
          :src="logoUrl"
          alt="Amigos con cola"
        />
      </div>
      <div>
        <h2
          class="text-surface text-xl sm:text-4xl md:text-[2.5rem] lg:text-[3.5rem] font-extrabold sm:mb-0"
        >
          Bienvenido
        </h2>
      </div>
      <div class="btn-container mt-20">
        <button
          type="button"
          class="text-surface px-7 shadow-3xl bg-blue-500 hover:bg-blue-400 rounded-full text-xs md:text-base sm:text-base sm:px-8 lg:text-xl py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 font-semibold"
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
