<script lang="ts" setup>
import { ref } from "vue";
import { Field, useField } from "vee-validate";
import { AnimalSpecies } from "@/enums/animal_species.ts";
import { AnimalGender } from "@/enums/animal_gender.ts";
import FormInput from "@/components/FormInput.vue";
import FormSelect from "../FormSelect.vue";

const props = defineProps(["formValues"]);

const selectOptions = [
  { value: "Dias", label: "Días" },
  { value: "Meses", label: "Meses" },
  { value: "Años", label: "Años" },
];

const perroIsSelect = ref<boolean>(false);
const gatoIsSelect = ref<boolean>(false);
const machoIsSelect = ref<boolean>(false);
const hembraIsSelect = ref<boolean>(false);
const edadDisabled = ref<boolean>(false);

const especiesField = useField("especie");
const generoField = useField("genero");
const edadField = useField("edad");
const tipoEdad = useField("tipo_edad");

const handlePerroClick = () => {
  perroIsSelect.value = true;
  gatoIsSelect.value = false;
  especiesField.handleChange(AnimalSpecies.DOG);
};

const handleGatoClick = () => {
  perroIsSelect.value = false;
  gatoIsSelect.value = true;
  especiesField.handleChange(AnimalSpecies.CAT);
};

const handleMachoClick = () => {
  machoIsSelect.value = true;
  hembraIsSelect.value = false;
  generoField.handleChange(AnimalGender.MALE);
};

const handleHembraClick = () => {
  machoIsSelect.value = false;
  hembraIsSelect.value = true;
  generoField.handleChange(AnimalGender.FEMALE);
};

const changeEdad = (e: Event) => {
  const fecha = new Date((e.target as HTMLInputElement).value);
  if (!fecha.getTime()) {
    edadDisabled.value = false;
  } else {
    edadDisabled.value = true;
    const fechaActual = new Date();
    const diff = fechaActual.getTime() - fecha.getTime();
    let diffDays = diff / (1000 * 60 * 60 * 24);
    if (diffDays < 30) {
      diffDays = Math.floor(diffDays);
      tipoEdad.handleChange("Dias");
    } else if (diffDays < 365) {
      diffDays = Math.floor(diffDays / 30);
      tipoEdad.handleChange("Meses");
    } else {
      diffDays = Math.floor(diffDays / 365);
      tipoEdad.handleChange("Años");
    }
    edadField.handleChange(diffDays);
  }
};
</script>

<template>
  <div class="grid gap-6 md:gap-x-24 md:gap-y-5 mb-6 md:grid-cols-2 md:mr-5">
    <div class="md:flex md:items-center md:space-x-4">
      <Field
        v-slot="{ field, errorMessage }"
        :validateOnInput="true"
        keep-value
        name="nombre"
      >
        <label
          class="block mb-2 font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
          for="nombre"
          >Nombre<strong>*</strong></label
        >

        <div class="flex flex-col w-full">
          <FormInput
            id="nombre"
            autocomplete="off"
            placeholder="Bruno"
            type="text"
            v-bind="field"
          />
          <span class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ errorMessage }}
          </span>
        </div>
      </Field>
    </div>

    <div
      class="md:col-start-1 md:row-start-2 md:flex md:items-center md:space-x-4"
    >
      <Field
        v-slot="{ field, errorMessage }"
        :validateOnInput="true"
        keep-value
        name="fecha"
      >
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
          for="fecha"
          >Fecha de entrada</label
        >
        <div class="flex flex-col w-full">
          <input
            id="fecha"
            class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="date"
            v-bind="field"
            @change="changeEdad"
          />
          <span class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ errorMessage }}
          </span>
        </div>
      </Field>
    </div>

    <div
      class="md:col-start-1 md:row-start-3 md:flex md:items-center md:space-x-4"
    >
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
        for="edad"
        >Edad<strong>*</strong></label
      >
      <div class="flex gap-4 items-center w-full">
        <Field
          v-slot="{ field, errorMessage }"
          :validateOnInput="true"
          keep-value
          name="edad"
        >
          <div class="flex flex-col w-full">
            <input
              id="edad"
              :disabled="edadDisabled"
              class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
              type="number"
              v-bind="field"
            />
            <span class="mt-2 text-sm text-red-600 dark:text-red-500">
              {{ errorMessage }}
            </span>
          </div>
        </Field>
        <Field
          v-slot="{ value, errorMessage, field }"
          :validateOnInput="true"
          keep-value
          name="tipo_edad"
        >
          <div class="flex flex-col w-full">
            <FormSelect
              :disabled="edadDisabled"
              v-bind="field"
              :options="selectOptions"
              :tipo_edad="value"
              placeholder="Tiempo en ..."
            />
            <span class="mt-2 text-sm text-red-600 dark:text-red-500">
              {{ errorMessage }}
            </span>
          </div>
        </Field>
      </div>
    </div>

    <div class="md:col-start-2 md:flex md:items-center md:space-x-4">
      <Field
        v-slot="{ errorMessage }"
        :validateOnInput="true"
        keep-value
        name="especie"
      >
        <label
          class="block mb-2 text-sm font-medium text-gray-900 md:mb-0 md:w-24"
          for="especie"
          >Especie<strong>*</strong></label
        >
        <div class="flex flex-col w-full">
          <div
            id="especie"
            class="text-sm font-semibold flex justify-around gap-2 items-center w-full border border-primary h-10"
          >
            <input
              :class="{
                'bg-primary w-full h-2/3 ml-3':
                  perroIsSelect || props.formValues.especie === 'Dog',
                'hover:bg-sky-300 w-full h-2/3 ml-3': !perroIsSelect,
              }"
              type="button"
              value="Perro"
              @click="handlePerroClick"
            />
            <input
              :class="{
                'bg-primary w-full h-2/3 mr-3':
                  gatoIsSelect || props.formValues.especie === 'Cat',
                'hover:bg-sky-300 w-full h-2/3 mr-3': !gatoIsSelect,
              }"
              type="button"
              value="Gato"
              @click="handleGatoClick"
            />
          </div>
          <span class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ errorMessage }}
          </span>
        </div>
      </Field>
    </div>

    <div class="md:col-start-2 md:flex md:items-center md:space-x-4">
      <Field
        v-slot="{ errorMessage }"
        :validateOnInput="true"
        keep-value
        name="genero"
      >
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
          for="genero"
          >Género<strong>*</strong></label
        >
        <div class="flex flex-col w-full">
          <div
            id="genero"
            class="text-sm font-semibold flex justify-around gap-2 items-center w-full border border-primary h-10"
          >
            <input
              id="macho"
              :class="{
                'bg-primary w-full h-2/3 ml-3':
                  machoIsSelect || props.formValues.genero === 'Male',
                'hover:bg-sky-300 w-full h-2/3 ml-3': !machoIsSelect,
              }"
              type="button"
              value="Macho"
              @click="handleMachoClick"
            />
            <input
              id="hembra"
              :class="{
                'bg-primary w-full h-2/3 mr-3':
                  hembraIsSelect || props.formValues.genero === 'Female',
                'hover:bg-sky-300 w-full h-2/3 mr-3': !hembraIsSelect,
              }"
              type="button"
              value="Hembra"
              @click="handleHembraClick"
            />
          </div>
          <span class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ errorMessage }}
          </span>
        </div>
      </Field>
    </div>

    <div class="md:flex md:items-center md:space-x-4">
      <Field
        v-slot="{ field, errorMessage }"
        :validateOnInput="true"
        keep-value
        name="ubicacion"
      >
        <label
          id="ubi"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
          for="ubicacion"
          >Ubicación<strong>*</strong></label
        >
        <div class="flex flex-col w-full">
          <input
            id="ubicacion"
            autocomplete="off"
            class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5"
            placeholder="Casa"
            type="text"
            v-bind="field"
          />
          <span class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ errorMessage }}
          </span>
        </div>
      </Field>
    </div>

    <div class="md:flex md:items-center md:space-x-4">
      <Field
        v-slot="{ field, errorMessage }"
        :validateOnInput="true"
        keep-value
        name="codigo"
      >
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
          for="codigo"
          >Código</label
        >
        <div class="flex flex-col w-full">
          <input
            id="codigo"
            autocomplete="off"
            class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5"
            placeholder="F-23"
            type="text"
            v-bind="field"
          />
          <span class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ errorMessage }}
          </span>
        </div>
      </Field>
    </div>

    <div class="md:flex md:items-center md:space-x-4">
      <Field
        v-slot="{ field, errorMessage }"
        :validateOnInput="true"
        keep-value
        name="peso"
      >
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-24"
          for="peso"
          >Peso<strong>*</strong></label
        >
        <div class="flex flex-col w-full">
          <input
            id="peso"
            autocomplete="off"
            class="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary p-2.5"
            placeholder="50 kg"
            type="number"
            v-bind="field"
          />
          <span class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ errorMessage }}
          </span>
        </div>
      </Field>
    </div>
  </div>

  <div class="mt-5">
    <Field
      v-slot="{ field, errorMessage }"
      :validateOnInput="true"
      keep-value
      name="historia"
    >
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="historiaOrigen"
        >Historia de origen</label
      >
      <div class="flex flex-col w-full">
        <textarea
          id="historia"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="Fue encontrado en ..."
          v-bind="field"
        />
        <span class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errorMessage }}
        </span>
      </div>
    </Field>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}

input:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

input,
textarea,
select {
  font-size: 1rem;
  font-weight: 500;
}

label {
  font-size: 1rem;
  font-weight: 500;
  color: #4b5563;
}

select:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

strong {
  color: red;
}
</style>
