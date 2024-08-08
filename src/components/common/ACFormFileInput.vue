<script setup lang="ts">
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
    action: string;
    allowedTypes?: string[];
  }>(),
  {
    action: " para seleccionar un archivo",
    allowedTypes: () => ["JPG", "JPEG", "PNG"],
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
      for="dropzone-file"
      class="flex flex-col w-full border-2 border-primary-dark border-dashed rounded-lg cursor-pointer bg-primary/5 hover:bg-primary-dark/20"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          class="w-8 h-8 mb-4 text-black"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p class="mb-2 text-sm text-black">
          <span class="font-semibold">Click</span> {{ action }}
        </p>
        <p class="text-xs text-black">{{ allowedTypes.join(", ") }}</p>
      </div>
      <Field :name="name" v-slot="{ resetField, handleChange, handleBlur }">
        <input
          ref="input"
          id="dropzone-file"
          accept="image/jpeg, image/png, image/jpg"
          type="file"
          class="hidden"
          @reset="
            () => {
              resetField();
              emit('change', null);
            }
          "
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
          @blur="handleBlur"
        />
      </Field>
    </label>
    <ErrorMessage :name="name" class="text-red-600 text-xs" />
  </div>
</template>
