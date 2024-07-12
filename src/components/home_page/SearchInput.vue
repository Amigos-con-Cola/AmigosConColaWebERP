<script lang="ts" setup>
const model = defineModel();
</script>

<template>
  <div class="relative">
    <div
      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
    >
      <svg
        aria-hidden="true"
        class="w-4 h-4 text-gray-500 dark:text-gray-400"
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </div>
    <input
      v-model="model"
      class="w-[16rem] h-8 block text-sm border-primary text-gray-900 border ps-10 rounded-full bg-gray-50 md:w-64"
      placeholder="Buscar"
      type="search"
    />
  </div>
</template>
