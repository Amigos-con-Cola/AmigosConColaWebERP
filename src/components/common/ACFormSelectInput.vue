<script lang="ts" setup>
import { ErrorMessage, Field } from "vee-validate";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

withDefaults(
  defineProps<{
    name: string;
    required?: boolean;
    options: string[];
  }>(),
  {
    required: true,
    items: () => [],
  },
);
</script>

<template>
  <div>
    <span class="text-sm font-medium mb-2">
      <slot />
      <span v-if="required" class="text-red-600">*</span>
    </span>
    <Field :name="name" v-slot="{ handleBlur, handleChange }">
      <v-select
        :options="options"
        class="p-0 rounded-lg bg-gray-50 selector"
        @search:blur="handleBlur"
        @option:selected="handleChange"
        @option:deselected="handleChange(null)"
        :clearable="false"
      >
        <template #search="{ attributes, events }">
          <input
            class="bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 vs__search"
            v-bind="attributes"
            v-on="events"
          />
        </template>
        <template #open-indicator="{ attributes }">
          <span class="icon-[uiw--down]" v-bind="attributes"></span>
        </template>
      </v-select>
    </Field>
    <ErrorMessage :name="name" class="text-red-600 text-xs" />
  </div>
</template>

<style scoped>
.selector {
  --tw-border-opacity: 1;
  --vs-border-color: rgb(209 213 219 / var(--tw-border-opacity));
  --vs-border-radius: 0.5rem;
  --vs-actions-padding: 0.775rem;
}
</style>
