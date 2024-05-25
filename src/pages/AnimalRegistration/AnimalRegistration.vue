<script lang="ts" setup>
import StepperIndicator from "@/components/AnimalRegistration/StepperIndicator.vue";
import StepOne from "@/components/AnimalRegistration/StepOne.vue";
import StepTwo from "@/components/AnimalRegistration/StepTwo.vue";
import StepThree from "@/components/AnimalRegistration/StepThree.vue";
import { computed, ref } from "vue";
import { Form } from "vee-validate";
import * as yup from "yup";

const animalRegistrationSchemas = [
  yup.object().shape({
    nombre: yup
      .string()
      .min(3, "Debe tener al menos 3 caracteres")
      .max(10, "Debe tener máximo 10 caracteres")
      .required("El nombre es obligatorio"),
    especie: yup.string().required("La especie es obligatoria"),
    edad: yup
      .number()
      .required("La edad es obligatoria")
      .positive("La edad debe ser un número positivo")
      .integer("La edad debe ser un número entero")
      .truncate(),
    genero: yup.string().required("El género es obligatorio"),
    ubicacion: yup.string().required("La ubicación es obligatoria"),
    codigo: yup.string().required("El código es obligatorio"),
    peso: yup
      .number()
      .required("El peso es obligatorio")
      .positive("El peso debe ser positivo")
      .truncate(),
    historiaOrigen: yup
      .string()
      .required("La historia de origen es obligatoria"),
  }),
  yup.object().shape({
    imagen: yup.object().json().shape({
      imageName: yup.string(),
      imageUrl: yup.string(),
    }),
  }),
];

const step = ref(0);

const steps = [StepOne, StepTwo, StepThree];

const currentSchema = computed(() => {
  return animalRegistrationSchemas[step.value];
});

const previousStep = () => {
  if (step.value > 0) {
    step.value--;
  }
};

const nextStep = (values: Object) => {
  if (step.value === 2) {
    console.log(values);
    return;
  }
  if (step.value < steps.length - 1) {
    step.value++;
  }
};
</script>

<template>
  <div class="flex flex-col">
    <h2 class="text-2xl md:text-4xl font-bold m-0">Registro de animal</h2>

    <div class="flex md:justify-center items-center w-full">
      <div class="w-full lg:max-w-3xl">
        <StepperIndicator v-model="step" />
      </div>
    </div>
    <Form
      v-slot="{ values }"
      :validation-schema="currentSchema"
      as="div"
      @submit="nextStep"
    >
      <form class="relative">
        <template v-if="step === 0">
          <StepOne :formValues="values" />
        </template>
        <template v-if="step === 1">
          <StepTwo :formValues="values" />
        </template>
        <template v-if="step === 2">
          <StepThree :formValues="values" />
        </template>
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
              v-if="step !== 2"
              class="font-semibold text-black bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              Siguiente
            </button>
            <button
              v-if="step === 2"
              class="font-semibold text-black bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              Terminar
            </button>
          </div>
        </div>
      </form>
    </Form>
  </div>
</template>

<style scoped></style>
