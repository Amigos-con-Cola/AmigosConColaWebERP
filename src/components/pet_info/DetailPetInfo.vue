<script lang="ts" setup>
const { historia } = defineProps<{
  historia: string | undefined;
}>();
</script>

<template>
  <div>{{ historia }}</div>
</template>

<style scoped></style>
