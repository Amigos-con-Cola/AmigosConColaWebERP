<script lang="ts" setup>
import { defineProps } from "vue";

interface Option {
  value: string;
  label: string;
}

const props = defineProps<{
  options: Option[];
  placeholder: string;
  disabled?: boolean;
  tipo_edad?: string;
}>();
</script>

<template>
  <select
    :class="`block w-full bg-gray-50 border border-gray-300 text-gray-900 text-base font-medium rounded-lg focus:ring-primary focus:border-primary p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `"
    v-bind="$attrs"
    :disabled="props.disabled"
    :tipo_edad="props.tipo_edad"
  >
    <option disabled value="" :selected="true">
      {{ placeholder }}
    </option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :selected="props.tipo_edad === option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
