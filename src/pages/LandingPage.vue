<script lang="ts" setup>
import logoUrl from "@/assets/images/amigos-con-cola-logo.png";
import dog from "@/assets/images/dog.jpg";
import { useRouter } from "vue-router";

const router = useRouter();
const onIniciar = () => router.push({ path: "/home" });
</script>

<template>
  <div class="flex items-center justify-end h-screen">
    <img
      :src="dog"
      alt="dog"
      class="w-screen h-screen fixed -z-50 aspect-square object-cover"
    />
    <div class="flex flex-col items-center pr-6 sm:pr-10 md:pr-20 lg:pr-32">
      <h1
        class="text-surface text-xl sm:text-4xl md:text-[2.5rem] lg:text-[3.5rem] font-extrabold sm:mb-px lg:mb-12"
      >
        Amigos con cola
      </h1>
      <div class="img-logo">
        <img
          :src="logoUrl"
          alt="Amigos con cola"
          class="aspect-square object-cover"
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
          class="text-surface px-7 shadow-3xl bg-blue-500 hover:bg-blue-400 rounded-full text-xs md:text-base sm:text-base sm:px-8 lg:text-xl py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 font-semibold"
          type="button"
          @click="onIniciar"
        >
          INICIAR
        </button>
      </div>
    </div>
  </div>
</template>
