<script lang="ts" setup>
import StepperIndicator from "@/components/AnimalRegistration/StepperIndicator.vue";
import StepOne from "@/components/AnimalRegistration/StepOne.vue";
import StepTwo from "@/components/AnimalRegistration/StepTwo.vue";
import StepThree from "@/components/AnimalRegistration/StepThree.vue";
import { reactive, ref, watch } from "vue";

const step = ref(0);

const steps = [StepOne, StepTwo, StepThree];

const previousStep = () => {
  if (step.value > 0) {
    step.value--;
  }
};

const nextStep = () => {
  if (step.value < steps.length - 1) {
    step.value++;
  }
};

const values = reactive({
  nombre: "",
  especie: "",
  edad: "",
  genero: "",
  ubicacion: "",
  codigo: "",
  peso: "",
  historiaOrigen: "",
  imageName: "",
  imageUrl: "",
});

watch(values, () => {
  console.log(values);
});
</script>

<template>
  <div class="flex flex-col">
    <h2 class="text-2xl md:text-4xl font-bold m-0">Registro de animal</h2>

    <div class="flex justify-center items-center w-full">
      <div class="max-w-3xl">
        <StepperIndicator v-model="step" />
      </div>
    </div>

    <component :is="steps[step]" :formValues="values"></component>
    <div class="flex items-center justify-center mt-7 mb-5">
      <div class="flex justify-evenly gap-10">
        <button
          class="w-24 font-semibold text-black bg-white border border-primary focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          @click="previousStep"
        >
          Atrás
        </button>
        <button
          class="font-semibold text-black bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
          @click="nextStep"
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
