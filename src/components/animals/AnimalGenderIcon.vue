<script lang="ts" setup>
import { AnimalGender } from "@/enums/animal_gender.ts";

const { gender } = defineProps<{ gender: String }>();

const classIcon =
  gender === AnimalGender.MALE
    ? "icon-[gg--gender-male] text-[1.7rem]"
    : "icon-[mdi--gender-female]  text-[1.6rem] text-[#FC49F5]";

const bgGender =
  gender === AnimalGender.MALE ? "bg-[#8EB1E5]/25" : "bg-[#E58EAD]/25";
</script>

<template>
  <div
    :class="bgGender"
    class="flex items-center justify-center rounded-full w-[2.3rem] h-[2.3rem]"
  >
    <span :class="classIcon" class="text-[#5395F8]" />
  </div>
</template>

<style scoped></style>
