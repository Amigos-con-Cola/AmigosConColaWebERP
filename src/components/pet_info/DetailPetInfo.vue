<script lang="ts" setup>
const { historia } = defineProps<{
  historia: string;
}>();
</script>

<template>
  <div>{{ historia }}</div>
</template>

<style scoped></style>
