<template>
  <input
    :class="`${inputClass} ${customClass}`"
    autocomplete="off"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "InputField",
  props: {
    customClass: {
      type: String as PropType<string>,
      default: "",
    },
  },
  setup(props) {
    const inputClass = computed(
      () =>
        "block w-full text-base font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary p-2.5",
    );

    return { inputClass, customClass: props.customClass };
  },
});
</script>
