<script lang="ts" setup>
import { ErrorMessage, Field } from "vee-validate";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

interface Option {
  value: string;
  label: string;
}

withDefaults(
  defineProps<{
    name: string;
    required?: boolean;
    selectedOption: string;
    items: Option[];
  }>(),
  {
    required: true,
    items: () => [],
  },
);

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="">
    <span class="text-sm font-medium">
      <slot />
      <span v-if="required" class="text-red-600">*</span>
    </span>
    <Field
      :name="name"
      as="select"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option selected>{{ selectedOption }}</option>
      <option v-for="item in items" :value="item.value">
        {{ item.label }}
      </option>
    </Field>
    <ErrorMessage :name="name" class="text-red-600 text-xs" />
  </div>
</template>

<style scoped></style>
