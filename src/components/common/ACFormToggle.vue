<script setup lang="ts">
import { Field } from 'vee-validate'

withDefaults(defineProps<{
  name: string,
  disabled?: boolean
}>(), {
  disabled: false
})
</script>

<template>
  <label class="inline-flex items-center me-5 cursor-pointer">
    <Field :name="name" :disabled="disabled" type="checkbox" class="sr-only peer" value="true" />
    <div
      class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/20 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-dark">
    </div>
    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      <slot />
    </span>
  </label>
</template>
