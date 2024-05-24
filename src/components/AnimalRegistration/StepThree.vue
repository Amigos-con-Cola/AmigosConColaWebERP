<script lang="ts" setup>
const pet = defineProps(["formValues"]);
</script>

<template>
  <div class="flex justify-center">
    <div
      class="w-[30rem] lg:w-[34rem] sm:w-[32rem] xl:w-[36rem] border sm:p-6 shadow-lg rounded-[1.5rem]"
    >
      <div class="mb-6 flex justify-center">
        <img
          :src="pet.formValues.imagen?.imageUrl"
          alt="pet image"
          class="w-24 h-24 rounded-full border-2 border-black"
        />
      </div>
      <div class="flex justify-center">
        <div class="grid grid-cols-2 gap-x-8">
          <div class="b-row flex items-center">
            <b class="mr-2">Código:</b>
            <span>{{ pet.formValues.codigo }}</span>
          </div>
          <div class="b-row flex items-center">
            <b class="mr-2">Nombre:</b>
            <span>{{ pet.formValues.nombre }}</span>
          </div>
          <div class="b-row flex items-center">
            <b class="mr-2">Edad:</b>
            <span>{{ `${pet.formValues.edad} años` }}</span>
          </div>
          <div class="b-row flex items-center">
            <b class="mr-2">Especie:</b>
            <span>{{ pet.formValues.especie }}</span>
          </div>
          <div class="b-row flex items-center">
            <b class="mr-2">Género:</b>
            <span>{{ pet.formValues.genero }}</span>
          </div>
          <div class="b-row flex items-center">
            <b class="mr-2">Ubicación:</b>
            <span>{{ pet.formValues.ubicacion }}</span>
          </div>
          <div class="b-row flex items-center">
            <b class="mr-2">Peso:</b>
            <span>{{ `${pet.formValues.peso} lbs` }}</span>
          </div>
          <div class="b-row flex items-center">
            <b class="mr-2">Estado:</b>
            <span
              :class="{
                'text-[#11AF22] font-semibold': pet.formValues.adoptado,
                'text-[#733700] font-semibold': !pet.formValues.adoptado,
              }"
            >
              {{ `${pet.formValues.adoptado ? "Adoptado" : "No adoptado"}` }}
            </span>
          </div>
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
