<script lang="ts" setup>
const { pet } = defineProps<{
  pet: {
    codigo: string;
    nombre: string;
    edad: number;
    especie: string;
    genero: string;
    ubicacion: string;
    peso: number;
    estado: boolean;
    imagen: string;
  };
}>();
</script>

<template>
  <div class="w-[18rem] border p-6 shadow-lg rounded-[1.5rem]">
    <button class="flex justify-end w-full pr-1 mb-4">
      <span class="icon-[fluent--edit-16-regular]"></span>
    </button>
    <div class="mb-6 flex justify-center">
      <img
        :src="pet.imagen"
        alt="pet image"
        class="w-24 h-24 rounded-full border-2 border-black"
      />
    </div>
    <div class="b-row">
      <b class="mr-9">Código:</b>
      <span>{{ pet.codigo }}</span>
    </div>
    <div class="b-row">
      <b class="mr-7">Nombre:</b>
      <span>{{ pet.nombre }}</span>
    </div>
    <div class="b-row">
      <b class="mr-[3.2rem]">Edad:</b>
      <span>{{ `Aprox ${pet.edad} años` }}</span>
    </div>
    <div class="b-row">
      <b class="mr-8">Especie:</b>
      <span>{{ pet.especie }}</span>
    </div>
    <div class="b-row">
      <b class="mr-8">Género:</b>
      <span>{{ pet.genero }}</span>
    </div>
    <div class="b-row">
      <b class="mr-3">Ubicación:</b>
      <span>{{ pet.ubicacion }}</span>
    </div>
    <div class="b-row">
      <b class="mr-[3.2rem]">Peso:</b>
      <span>{{ `${pet.peso} lbs` }}</span>
    </div>
    <div class="b-row">
      <b class="mr-[2.1rem]">Estado:</b>
      <span
        :class="{
          'text-[#11AF22] font-semibold': pet.estado,
          'text-[#733700] font-semibold': !pet.estado,
        }"
      >
        {{ `${pet.estado ? "Adoptado" : "No adoptado"}` }}
      </span>
    </div>
    <div class="b-row flex flex-col items-center mt-6">
      <b class="text-primary">Próxima vacuna</b>
      <p>Vacuna1 - 11/12/2024</p>
    </div>
    <div class="b-row flex flex-col items-center mt-6">
      <b class="text-primary">Próxima desparacitación</b>
      <p>Vacuna2 - 11/12/2024</p>
    </div>
  </div>
</template>

<style scoped>
.b-row {
  margin-bottom: 0.5rem;
}
</style>
