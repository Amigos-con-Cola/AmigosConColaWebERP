<script setup>
import { defineProps } from "vue"
const { icon, text } = defineProps({
  icon: "string",
  text: "string"
})
</script>

<template>
  <button class="flex justify-evenly items-center bg-[#DCF1F9] rounded-full w-28 h-9">
    <img class="size-6" :src="icon" alt="">
    <p class="font-semibold">{{ text }}</p>
  </button>
</template>
