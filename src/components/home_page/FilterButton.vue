<script setup lang="ts">
const { icon, text, isSelect } = defineProps<{
  icon: string,
  text?: string,
  isSelect?: boolean,
}>()
</script>

<template>
  <button
    :class="{ 'bg-primary flex justify-evenly items-center rounded-full w-28 h-9': isSelect, 'flex justify-evenly items-center bg-[#DCF1F9] rounded-full w-28 h-9': !isSelect }">
    <img class="size-6" :src="icon" alt="">
    <p class="font-semibold">{{ text }}</p>
  </button>
</template>
