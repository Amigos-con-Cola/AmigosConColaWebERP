<script lang="ts" setup>
import StepperIndicator from "@/components/animal_registration/StepperIndicator.vue";
import StepOne from "@/components/animal_registration/StepOne.vue";
import StepTwo from "@/components/animal_registration/StepTwo.vue";
import StepThree from "@/components/animal_registration/StepThree.vue";
import { computed, ref } from "vue";
import { Form } from "vee-validate";
import * as yup from "yup";
import { useAnimals } from "@stores/animalStore.ts";
import router from "@/routes";

const animalRegistrationSchemas = [
  yup.object().shape({
    nombre: yup
      .string()
      .min(3, "Debe tener al menos 3 caracteres")
      .max(10, "Debe tener máximo 10 caracteres")
      .required("El nombre es obligatorio"),
    especie: yup.string().required("La especie es obligatoria"),
    fecha: yup
      .date()
      .max(new Date(), "La fecha no puede ser mayor a la actual")
      .optional()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr)),
    edad: yup
      .number()
      .required("La edad es obligatoria")
      .positive("La edad debe ser un número positivo")
      .integer("La edad debe ser un número entero")
      .truncate(),
    tipo_edad: yup.string().required("Obligatorio"),
    genero: yup.string().required("El género es obligatorio"),
    ubicacion: yup.string().required("La ubicación es obligatoria"),
    codigo: yup.string(),
    peso: yup
      .number()
      .required("El peso es obligatorio")
      .positive("El peso debe un número ser positivo")
      .truncate(),
    historia: yup.string(),
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

const animales = useAnimals();
const currentSchema = computed(() => {
  return animalRegistrationSchemas[step.value];
});

const showSuccessToast = ref(false);
const showFailToast = ref(false);
const isSuccess = ref(false);

const previousStep = () => {
  if (step.value > 0) {
    step.value--;
  }
};

const nextStep = async (values: any) => {
  if (step.value === 2) {
    const res = await animales.createAnimal(values, values.imagen?.image);
    if (!res) {
      showFailToast.value = true;
      isSuccess.value = false;
      setTimeout(() => {
        showFailToast.value = false;
      }, 3000);
      return;
    }
    showSuccessToast.value = true;
    isSuccess.value = true;
    setTimeout(() => {
      showSuccessToast.value = false;
      router.push("/home");
    }, 2000);

    return;
  }
  if (step.value < steps.length - 1) {
    step.value++;
  }
};
</script>

<template>
  <div class="px-5 overflow-hidden">
    <h2 class="text-2xl md:text-4xl font-bold m-0">Registro de animal</h2>

    <div class="flex md:justify-center items-center w-full">
      <div class="w-full lg:max-w-3xl">
        <StepperIndicator v-model="step" />
      </div>
    </div>
    <Form
      v-slot="{ values, isSubmitting }"
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
              :disabled="isSubmitting || isSuccess"
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
              :disabled="isSubmitting || isSuccess"
              class="font-semibold text-black bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              Terminar
            </button>
          </div>
        </div>
      </form>
    </Form>
    <div
      v-if="showSuccessToast"
      id="toast-bottom-right"
      class="justify-start flex-shrink-0 h-10 text-green-500 bg-green-100 rounded-lg fixed flex items-center w-full max-w-xs p-4 space-x-4 divide-x rtl:divide-x-reverse divide-gray-200 shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
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
      <p>Datos enviados correctamente</p>
    </div>
    <div
      v-if="showFailToast"
      id="toast-bottom-right"
      class="items-center justify-start flex-shrink-0 h-10 text-orange-500 bg-orange-100 rounded-lg fixed flex w-full max-w-xs p-4 space-x-4 divide-x rtl:divide-x-reverse divide-gray-200 shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
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
      <p>Error al crear el animal</p>
    </div>
  </div>
</template>

<style scoped>
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
