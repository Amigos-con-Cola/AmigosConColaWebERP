<script lang="ts" setup>
import { ErrorMessage, Field } from "vee-validate";

const props = withDefaults(
  defineProps<{
    name: string;
    required?: boolean;
    disabled?: boolean;
  }>(),
  {
    required: true,
    disabled: false,
  },
);

const focus = () => {
  const elem: HTMLInputElement | null = document.querySelector(
    `input[name=${props.name}]`,
  );
  if (elem !== null) {
    elem.focus();
  }
};

defineExpose({ focus });
</script>

<template>
  <div>
    <label :for="name" class="block mb-2 text-sm font-medium">
      <slot />
      <span v-if="required" class="text-red-600">*</span>
    </label>
    <Field
      :id="name"
      :disabled="disabled"
      :name="name"
      :required="required"
      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
      type="text"
      v-bind="$attrs"
      validate-on-input
    />
    <ErrorMessage :name="name" class="text-red-600 text-xs" />
  </div>
</template>
