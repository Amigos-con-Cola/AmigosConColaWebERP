<script lang="ts" setup>
import { ErrorMessage, Field } from "vee-validate";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

withDefaults(
  defineProps<{
    name: string;
    required?: boolean;
  }>(),
  {
    required: true,
  },
);
</script>

<template>
  <div>
    <label :for="name" class="block text-sm font-medium mb-2">
      <slot />
      <span v-if="required" class="text-red-600">*</span>
    </label>
    <Field :name="name" v-slot="{ handleBlur, handleChange, errors, value }">
      <VueDatePicker
        @blur="handleBlur"
        @update:model-value="
          (date: Date) => {
            const dayI = date.getDate();
            const monthI = date.getMonth();

            const day = dayI < 10 ? `0${dayI}` : dayI.toString();
            const month = monthI < 10 ? `0${monthI}` : monthI.toString();
            const anio = date.getFullYear();

            const fecha = `${month}/${day}/${anio}`;

            handleChange(fecha);
          }
        "
        position="left"
        :enable-time-picker="false"
        :state="errors.length === 0 ? undefined : false"
      >
        <template #trigger>
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ps-10"
              placeholder="Seleccione una fecha"
              :required="required"
              :value="value"
            />
          </div>
        </template>
      </VueDatePicker>
    </Field>
    <ErrorMessage :name="name" class="text-red-600 text-xs" />
  </div>
</template>
