<script lang="ts" setup>
const props = defineProps<{
  tipo: string;
  fecha: string;
  producto: string;
  peso: number;
  formato: string;
}>();
</script>

<template>
  <div
    class="bg-primary/20 py-2 px-6 w-[30rem] h-[6rem] rounded-xl flex flex-col justify-center"
  >
    <h1 class="font-bold text-gray-700">{{ props.producto }}</h1>
    <h2 class="mt-1 text-gray-600">{{ props.formato }}</h2>
    <h3 class="text-gray-600">{{ props.fecha }}</h3>
  </div>
</template>

<style scoped></style>
