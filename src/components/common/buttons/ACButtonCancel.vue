<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: string;
  }>(),
  {
    type: "button",
  },
);
</script>

<template>
  <button
    class="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-500/25 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
    :type="type"
  >
    <slot />
  </button>
</template>
