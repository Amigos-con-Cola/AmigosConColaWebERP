<script lang="ts" setup>
import { Animal } from "@/stores/animalStore";
const { pet } = defineProps<{
  pet: Animal | null;
}>();
</script>

<template>
  <div
    class="w-[18.5rem] lg:w-[22rem] sm:w-[20rem] xl:w-[16.8rem] border p-5 sm:p-6 shadow-lg rounded-[1.5rem]"
  >
    <button class="flex justify-end w-full pr-1 mb-4">
      <span class="icon-[fluent--edit-16-regular]"></span>
    </button>
    <div class="mb-6 flex justify-center">
      <img
        :src="pet?.imagen"
        alt="pet image"
        class="w-24 h-24 rounded-full border-2 border-black"
      />
    </div>
    <div class="flex flex-wrap md:flex-col lg:flex-col">
      <div class="b-row mr-[2.05rem]">
        <b class="mr-2 sm:mr-9 lg:mr-8">Código:</b>
        <span>{{ pet?.codigo }}</span>
      </div>
      <div class="b-row">
        <b class="mr-2 sm:mr-7 lg:mr-6">Nombre:</b>
        <span>{{ pet?.nombre }}</span>
      </div>
      <div class="b-row mr-[2.05rem]">
        <b class="mr-2 sm:mr-[3.2rem] lg:mr-[2.9rem]">Edad:</b>
        <span>{{ `${pet?.edad} años` }}</span>
      </div>
      <div class="b-row">
        <b class="mr-2 sm:mr-8 lg:mr-7">Especie:</b>
        <span>{{ pet?.especie }}</span>
      </div>
      <div class="b-row mr-4">
        <b class="mr-2 sm:mr-8 lg:mr-7">Género:</b>
        <span>{{ pet?.genero }}</span>
      </div>
      <div class="b-row">
        <b class="mr-2 sm:mr-3 lg:mr-2">Ubicación:</b>
        <span>{{ pet?.ubicacion }}</span>
      </div>
      <div class="b-row mr-[2.8rem]">
        <b class="mr-1 sm:mr-[3.2rem] lg:mr-[2.8rem]">Peso:</b>
        <span>{{ `${pet?.peso} lbs` }}</span>
      </div>
      <div class="b-row">
        <b class="mr-1 sm:mr-[2.1rem] lg:mr-[1.8rem]">Estado:</b>
        <span
          :class="{
            'text-[#11AF22] font-semibold': pet?.adoptado,
            'text-[#733700] font-semibold': !pet?.adoptado,
          }"
        >
          {{ `${pet?.adoptado ? "Adoptado" : "No adoptado"}` }}
        </span>
      </div>
      <div class="w-full">
        <div class="b-row flex flex-col items-center mt-6">
          <b class="text-primary">Próxima vacuna</b>
          <p>Vacuna1 - 11/12/2024</p>
        </div>
        <div class="b-row flex flex-col items-center mt-6">
          <b class="text-primary">Próxima desparacitación</b>
          <p>Vacuna2 - 11/12/2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.b-row {
  margin-bottom: 0.5rem;
}
</style>
