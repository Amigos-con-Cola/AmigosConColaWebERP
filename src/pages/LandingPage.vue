<template>
  <div class="background flex items-center justify-end pr-20 h-screen">
    <div class="flex flex-col items-center">
      <h1
        class="text-6xl text-surface mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-8xl dark:text-white text-right"
      >
        Amigos Con Cola
      </h1>
      <div class="img-logo">
        <img class="w-80" src="./assets/logo.png" alt="Amigos con cola" />
      </div>
      <div class="text-right">
        <h2 class="text-surface text-7xl font-extrabold dark:text-white">
          Bienvenido
        </h2>
      </div>
      <div class="btn-container">
        <button
          type="button"
          class="text-white bg-blue-500 hover:bg-blue-400 font-medium text-xl rounded-full text-sm px-10 py-5 mt-8 text-center me-2 mb-2"
        >
          INICIAR
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.background {
  background-image: url(../assets/dog.jpg);
  background-size: 100% 100%;
}
</style>
