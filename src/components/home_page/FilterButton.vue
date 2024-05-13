<script setup lang="ts">
const { icon, text, isSelect } = defineProps<{
  icon: string,
  text?: string,
  isSelect?: boolean,
}>()
</script>

<template>
  <button type="button"
    :class="{ 'bg-primary  w-max px-8 flex   gap-5 justify-evenly items-center rounded-full  h-9': isSelect, 'flex justify-evenly   items-center px-8 bg-[#DCF1F9] gap-5 rounded-full  h-9': !isSelect }">
    <img class=" size-5 md:size-6" :src="icon" alt="">
    <span class="hidden md:flex text-sm  md:font-semibold">{{ text }}</span>
  </button>
</template>
