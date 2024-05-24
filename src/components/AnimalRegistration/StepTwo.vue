<script lang="ts" setup>
import { ref } from "vue";
import upload from "@/assets/AnimalRegistration/upload.svg";
import cancel from "@/assets/AnimalRegistration/cancel.svg";
import { Field, useField } from "vee-validate";

const props = defineProps(["formValues"]);

const imageName = ref(props.formValues.imagen.imageName || "");
const imageUrl = ref(props.formValues.imagen.imageUrl || "");
const isUploading = ref(false);
const progress = ref(0);

const { handleChange } = useField("imagen");

const inputHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    imageName.value = file.name;
    imageUrl.value = URL.createObjectURL(file);
    startUploadSimulation();
    handleChange({ imageName: imageName.value, imageUrl: imageUrl.value });
  }
};

const startUploadSimulation = () => {
  isUploading.value = true;
  progress.value = 0;
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 1;
    } else {
      clearInterval(interval);
      isUploading.value = false;
    }
  }, 5); // Simulate upload time
};

const cancelHandler = () => {
  imageName.value = "";
  imageUrl.value = "";
  handleChange({});
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex items-center justify-center md:w-2/3">
      <Field v-slot="{ errorMessage }" keep-value name="imagen">
        <label
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          for="dropzone-file"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <img :src="upload" alt="upload svg" />
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold text-primary"
                >Click para subir imagen</span
              >
              o arrastra y suelta
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            accept="image/*"
            class="hidden"
            name="imagen"
            type="file"
            @input="inputHandler"
          />
          <span class="block mt-2 text-sm text-red-600 dark:text-red-500">
            {{ errorMessage }}
          </span>
        </label>
      </Field>
    </div>

    <div v-if="imageName" class="mt-5 w-2/3">
      <h2>Subiendo archivo</h2>
      <div
        class="flex justify-between items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
      >
        <div class="items-center flex">
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="Vista previa de la imagen"
            class="h-4"
          />
          <span class="flex-1 truncate w-32 md:w-full ms-3 whitespace-nowrap">{{
            imageName
          }}</span>
        </div>
        <button @click="cancelHandler">
          <img :src="cancel" alt="boton cancelar" />
        </button>
      </div>
      <div
        :style="{ width: `${progress}%` }"
        class="bg-green-500 h-1 rounded-full"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
