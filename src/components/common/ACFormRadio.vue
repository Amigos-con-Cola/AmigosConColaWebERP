<script setup lang="ts">
import { ErrorMessage, Field } from "vee-validate";

withDefaults(
  defineProps<{
    name: string;
    required?: boolean;
    items: string[];
    disabled?: boolean;
  }>(),
  {
    required: true,
    disabled: false,
    items: () => [],
  },
);
</script>

<template>
  <div class="flex flex-col h-full gap-2">
    <div class="flex gap-x-4 items-center h-full">
      <span class="inline-flex items-center h-full text-sm font-medium">
        <slot />
        <span v-if="required" class="text-red-600">*</span>
      </span>
      <div
        :class="`flex ${items.length > 5 ? 'flex-col' : 'flex-row'} items-center justify-center gap-2 h-full`"
      >
        <div class="flex items-center me-4" v-for="item of items">
          <Field
            :id="name"
            type="radio"
            :required="required"
            :name="name"
            :value="item"
            :disabled="disabled"
            class="w-4 h-4 text-primary border-primary-dark focus:ring-primary/25 focus:ring-2"
          />
          <label :for="name" class="text-sm ms-2 font-medium text-gray-900">
            {{ item }}
          </label>
        </div>
      </div>
    </div>
    <ErrorMessage :name="name" class="text-red-600 text-xs" />
  </div>
</template>
