<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { useAnimal } from "@stores/animalStore.ts";
import { Schema, typedSchema as schema } from "@/schemas/editAnimalSchema.ts";
import {
  typedSchema as changeImageSchema,
  Schema as ChangeImageSchema,
} from "@/schemas/changeImageSchema";
import ACFormInput from "@/components/common/ACFormInput.vue";
import ACFormRadio from "@/components/common/ACFormRadio.vue";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import ACButtonCancel from "@/components/common/buttons/ACButtonCancel.vue";
import ACFormMultiLineInput from "@/components/common/ACFormMultiLineInput.vue";
import { Form, SubmissionHandler } from "vee-validate";
import { onMounted, ref, watch } from "vue";
import { useToast } from "@/stores/toastStore";
import ACFormToggle from "@/components/common/ACFormToggle.vue";
import { initFlowbite, Modal, ModalInterface } from "flowbite";
import ACFormFileInput from "@/components/common/ACFormFileInput.vue";

onMounted(() => initFlowbite());

const route = useRoute();
const id = parseInt(route.params.id as string);

const form = ref<typeof Form | null>(null);
const animal = useAnimal(id);

const editing = ref(false);
const nameInput = ref<typeof ACFormInput | null>(null);

const imageUrl = ref<string | undefined | null>(animal.data?.imagen);
const imageFile = ref<File | null>(null);
const imageChangeEl = ref<null | HTMLDivElement>(null);
const imageChangeModal = ref<ModalInterface | null>(null);

onMounted(() => {
  if (imageChangeEl.value !== null) {
    imageChangeModal.value = new Modal(
      imageChangeEl.value,
      {
        placement: "center",
        backdrop: "static",
        backdropClasses: "bg-gray-900/50 fixed inset-0 z-40",
        closable: false,
      },
      {
        override: true,
      },
    );
  }
});

const onUpdateImagePreview = (file: File | null) => {
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
    imageFile.value = file;
  } else {
    imageUrl.value = null;
    imageFile.value = null;
  }
};

const onChangeImage = async ({ imagen }: ChangeImageSchema) => {
  try {
    await animal.changeImage(imagen as any);
    toast({
      message: "Imagen actualizada con éxito",
    });
    imageChangeModal?.value?.hide();
  } catch {
    toast({
      message: "Hubo un error al actualizar la imagen",
      severity: "error",
    });
  }
};

const { toast } = useToast();

const resetForm = () => {
  if (animal.data !== null && form.value !== null) {
    form.value.resetForm({
      values: {
        ...animal.data,
        genero: animal.data.genero === "Female" ? "Femenino" : "Masculino",
        especie: animal.data.especie === "Cat" ? "Gato" : "Perro",
        adoptado: animal.data.adoptado ? "true" : "false",
      },
    });
  }
};

watch(animal, () => resetForm());

const onEnableEditing = () => {
  editing.value = true;
  setTimeout(() => nameInput.value?.focus(), 100);
};

const onCancelEdit = () => {
  resetForm();
  editing.value = false;
};

const onSubmit: SubmissionHandler<Schema> = async (values) => {
  try {
    await animal.update(values as any);
    toast({ message: "Animal actualizado con éxito" });
    editing.value = false;
  } catch {
    toast({
      message: "Hubo un error al actualizar el animal",
      severity: "error",
    });
  }
};
</script>

<template>
  <!-- Image edit modal -->
  <!-- NOTE: Extract this to a component if we use modal elsewhere -->
  <div class="px-8 py-4">
    <div
      ref="imageChangeEl"
      tabindex="-1"
      aria-hidden="true"
      class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
    >
      <Form
        class="relative w-full max-w-2xl max-h-full"
        :validation-schema="changeImageSchema"
        @submit="onChangeImage"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div
              class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
            >
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Editar imagen
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                @click="() => imageChangeModal?.hide()"
              >
                <span class="icon-[material-symbols--close]"></span>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5 space-y-4">
              <div v-if="imageUrl">
                <img
                  :src="imageUrl"
                  alt="preview"
                  class="aspect-square object-cover w-full max-h-40"
                />
                <span class="text-xs">
                  Archivo cargado: {{ imageFile?.name }}
                </span>
              </div>
              <ACFormFileInput name="imagen" @change="onUpdateImagePreview" />
            </div>
            <div
              class="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
            >
              <ACButtonPrimary
                class="flex items-center gap-1 w-fit"
                type="submit"
              >
                <span class="icon-[carbon--save] text-xl"></span>
                Guardar
              </ACButtonPrimary>
            </div>
          </div>
        </div>
      </Form>
    </div>

    <div class="flex flex-col gap-4 justify-center mb-4">
      <div class="flex gap-4">
        <button class="relative" @click="() => imageChangeModal?.show()">
          <img
            :src="animal.data?.imagen"
            alt=""
            width="40"
            class="rounded-full aspect-square cover border"
          />
          <div
            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-2"
          >
            <span class="icon-[tabler--edit]"></span>
          </div>
        </button>
        <h1 class="text-2xl">
          {{ animal.data?.nombre }}
        </h1>
      </div>
      <div class="flex items-center h-full gap-1">
        <ACButtonPrimary
          @click="onEnableEditing"
          class="flex items-center gap-2 me-2"
        >
          <span class="icon-[uil--edit]"></span>
          Editar
        </ACButtonPrimary>
        <RouterLink
          :to="{ name: 'desparasitaciones', params: { id } }"
          class="bg-primary/20 hover:bg-primary-dark/20 text-primary text-sm font-medium px-2.5 py-0.5 rounded border border-primary-dark inline-flex items-center justify-center"
        >
          Desparasitaciones
        </RouterLink>
        <RouterLink
          :to="{ name: 'aseos', params: { id } }"
          class="bg-primary/20 hover:bg-primary-dark/20 text-primary text-sm font-medium px-2.5 py-0.5 rounded border border-primary-dark inline-flex items-center justify-center"
        >
          Aseos
        </RouterLink>
        <RouterLink
          :to="{ name: 'vacunas', params: { id } }"
          class="bg-primary/20 hover:bg-primary-dark/20 text-primary text-sm font-medium px-2.5 py-0.5 rounded border border-primary-dark inline-flex items-center justify-center"
        >
          Vacunas
        </RouterLink>
        <RouterLink
          :to="{ name: 'pesos', params: { id } }"
          class="bg-primary/20 hover:bg-primary-dark/20 text-primary text-sm font-medium px-2.5 py-0.5 rounded border border-primary-dark inline-flex items-center justify-center"
        >
          Pesos
        </RouterLink>
      </div>
    </div>
    <Form
      ref="form"
      class="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 md:gap-x-8 md:gap-y-4"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <ACFormInput ref="nameInput" name="nombre" :disabled="!editing">
        Nombre
      </ACFormInput>
      <ACFormInput name="edad" :disabled="!editing"> Edad</ACFormInput>
      <ACFormInput name="ubicacion" :disabled="!editing">
        Ubicación
      </ACFormInput>
      <ACFormInput name="codigo" :required="false" :disabled="!editing">
        Código
      </ACFormInput>
      <ACFormInput name="peso" :disabled="!editing"> Peso</ACFormInput>
      <ACFormToggle :disabled="!editing" name="adoptado">
        Adoptado
      </ACFormToggle>
      <ACFormRadio
        name="genero"
        :items="['Femenino', 'Masculino']"
        :disabled="!editing"
      >
        Género
      </ACFormRadio>
      <ACFormRadio
        name="especie"
        :items="['Gato', 'Perro']"
        :disabled="!editing"
      >
        Especie
      </ACFormRadio>
      <ACFormMultiLineInput
        class="col-span-2"
        name="historia"
        :required="false"
        :disabled="!editing"
      >
        Historia
      </ACFormMultiLineInput>
      <div class="flex gap-2 items-center col-start-2 justify-self-end">
        <ACButtonPrimary
          v-if="editing"
          class="flex items-center gap-1 w-fit mt-4"
          type="submit"
        >
          <span class="icon-[carbon--save] text-xl"></span>
          Guardar
        </ACButtonPrimary>
        <ACButtonCancel
          v-if="editing"
          @click="onCancelEdit"
          class="flex items-center gap-1 w-fit mt-4"
        >
          Cancelar
        </ACButtonCancel>
      </div>
    </Form>
  </div>
</template>
