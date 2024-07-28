<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useAnimal } from "@stores/animalStore.ts";
import AnimalInfoOptions from "@/components/AnimalInfoOptions.vue";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();
const animal = useAnimal(parseInt(route.params.id as string));
const showSuccessToast = ref(false);
const showFailToast = ref(false);

const onDelete = async () => {
  try {
    await animal.remove();

    showSuccessToast.value = true;

    setTimeout(async () => await router.push("/home"), 1000);
  } catch (err) {
    showFailToast.value = true;
    setTimeout(() => (showFailToast.value = false), 1000);
  }
};
</script>

<template>
  <div
    v-if="showSuccessToast"
    id="toast-bottom-right"
    class="justify-start flex-shrink-0 h-10 text-green-500 bg-green-100 rounded-lg fixed flex items-center w-full max-w-xs p-4 space-x-4 divide-x rtl:divide-x-reverse divide-gray-200 shadow right-5 top-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
    role="alert"
  >
    <svg
      aria-hidden="true"
      class="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
      />
    </svg>
    <span class="sr-only">Check icon</span>
    <p>Animal eliminado correctamente</p>
  </div>

  <div
    v-if="showFailToast"
    id="toast-bottom-right"
    class="items-center justify-start flex-shrink-0 h-10 text-orange-500 bg-orange-100 rounded-lg fixed flex w-full max-w-xs p-4 space-x-4 divide-x rtl:divide-x-reverse divide-gray-200 shadow right-5 top-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
    role="alert"
  >
    <svg
      aria-hidden="true"
      class="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"
      />
    </svg>
    <span class="sr-only">Warning icon</span>
    <p>Error al eliminar animal</p>
  </div>

  <div v-if="animal.loading">Loading...</div>

  <div
    v-else
    class="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row items-center sm:mt-[3rem]"
  >
    <AnimalInfoOptions
      :pet="animal.data"
      class="mr-[0.75rem] mb-10 sm:mr-10 sm:h-[37.8rem] xl:m-0 lg:mb-8"
      @delete="onDelete"
    />
  </div>
</template>
