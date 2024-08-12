<script lang="ts" setup>
import { ErrorMessage, Field } from "vee-validate";
import { ref } from "vue";

const input = ref<HTMLInputElement | null>(null);

const reset = () => {
  if (input.value !== null) {
    input.value.dispatchEvent(new CustomEvent("reset"));
  }
};

withDefaults(
  defineProps<{
    name: string;
    action?: string;
    allowedTypes?: string[];
  }>(),
  {
    action: " para seleccionar un archivo",
    allowedTypes: () => ["image/jpg", "image/jpeg", "image/png"],
  },
);

const emit = defineEmits<{
  (e: "change", file: File | null): void;
}>();

defineExpose({
  reset,
});
</script>

<template>
  <div class="w-full">
    <label
      class="flex flex-col w-full border-2 border-primary-dark border-dashed rounded-lg cursor-pointer bg-primary/5 hover:bg-primary-dark/20"
      for="dropzone-file"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          aria-hidden="true"
          class="w-8 h-8 mb-4 text-black"
          fill="none"
          viewBox="0 0 20 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
        <p class="mb-2 text-sm text-black">
          <span class="font-semibold">Click</span> {{ action }}
        </p>
        <p class="text-xs text-black">{{ allowedTypes.join(", ") }}</p>
      </div>
      <Field v-slot="{ resetField, handleChange, handleBlur }" :name="name">
        <input
          id="dropzone-file"
          ref="input"
          :accept="allowedTypes.join(', ')"
          class="hidden"
          type="file"
          @blur="handleBlur"
          @change="
            (event: Event) => {
              const target = event.target as HTMLInputElement;
              const file = target.files?.[0] ?? null;
              handleChange(file);
              if (file === null || allowedTypes.includes(file.type)) {
                emit('change', file);
              }
            }
          "
          @reset="
            () => {
              resetField();
              emit('change', null);
            }
          "
        />
      </Field>
    </label>
    <ErrorMessage :name="name" class="text-red-600 text-xs" />
  </div>
</template>
