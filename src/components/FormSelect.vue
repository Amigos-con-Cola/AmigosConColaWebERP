<template>
  <select
    :class="`${selectClass} ${customClass}`"
    :disabled="disabled"
    v-bind="$attrs"
    @change="updateValue"
  >
    <option :selected="!modelValue" disabled value="">
      {{ placeholder }}
    </option>
    <option
      v-for="option in options"
      :key="option.value"
      :selected="modelValue === option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

interface Option {
  value: string;
  label: string;
}

export default defineComponent({
  name: "SelectForm",
  props: {
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    modelValue: {
      type: String as PropType<string>,
      default: "",
    },
    placeholder: {
      type: String as PropType<string>,
      default: "Select an option",
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    customClass: {
      type: String as PropType<string>,
      default: "",
    },
  },
  setup(props, { emit }) {
    const selectClass = computed(
      () =>
        "block w-full text-base font-medium bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary focus:border-primary p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    );

    const updateValue = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      emit("update:modelValue", target.value);
    };

    return { selectClass, updateValue };
  },
});
</script>
