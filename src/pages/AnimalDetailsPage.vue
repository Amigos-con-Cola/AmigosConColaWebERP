<script setup lang="ts">
import { useRoute } from "vue-router";
import { useAnimal } from "@stores/animalStore.ts";
import { typedSchema as schema, Schema } from "@/schemas/editAnimalSchema.ts";
import ACFormInput from "@/components/common/ACFormInput.vue";
import ACFormRadio from "@/components/common/ACFormRadio.vue";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import ACButtonCancel from "@/components/common/buttons/ACButtonCancel.vue";
import ACFormMultiLineInput from "@/components/common/ACFormMultiLineInput.vue";
import { Form, SubmissionHandler } from "vee-validate";
import { ref, watch } from "vue";
import { useToast } from "@/stores/toastStore";
import ACFormToggle from "@/components/common/ACFormToggle.vue";

const route = useRoute();
const id = parseInt(route.params.id as string);

const form = ref<typeof Form | null>(null);
const animal = useAnimal(id);

const editing = ref(false);

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

const onCancelEdit = () => {
  resetForm();
  editing.value = false;
};

const onSubmit: SubmissionHandler<Schema> = async (values) => {
  try {
    await animal.update(values as any);
    toast({ message: "Animal actualizado con éxito" })
    editing.value = false
  } catch {
    toast({
      message: "Hubo un error al actualizar el animal",
      severity: "error",
    })
  }
};
</script>

<template>
  <div class="px-8 py-4">
    <div class="flex flex-col gap-4 justify-center mb-4">
      <div class="flex gap-4">
        <img :src="animal.data?.imagen" alt="imagen" width="40" class="rounded-full aspect-square cover" />
        <h1 class="text-2xl">
          {{ animal.data?.nombre }}
        </h1>
      </div>
      <div class="flex items-center h-full">
        <ACButtonPrimary @click="editing = true" class="flex items-center gap-2">
          <span class="icon-[uil--edit]"></span>
          Edit
        </ACButtonPrimary>
      </div>
    </div>
    <Form ref="form" class="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 md:gap-x-8 md:gap-y-4"
      :validation-schema="schema" @submit="onSubmit">
      <ACFormInput :class="!editing ? 'bg-white border-none px-0' : ''" name="nombre" :disabled="!editing">
        Nombre
      </ACFormInput>
      <ACFormInput :class="!editing ? 'bg-white border-none px-0' : ''" name="edad" :disabled="!editing">
        Edad
      </ACFormInput>
      <ACFormInput :class="!editing ? 'bg-white border-none px-0' : ''" name="ubicacion" :disabled="!editing">
        Ubicación
      </ACFormInput>
      <ACFormInput :class="!editing ? 'bg-white border-none px-0' : ''" name="codigo" :required="false"
        :disabled="!editing">
        Código
      </ACFormInput>
      <ACFormInput :class="!editing ? 'bg-white border-none px-0' : ''" name="peso" :disabled="!editing">
        Peso
      </ACFormInput>
      <ACFormToggle :disabled="!editing" name="adoptado">
        Adoptado
      </ACFormToggle>
      <span></span>
      <ACFormRadio name="genero" :items="['Femenino', 'Masculino']" :disabled="!editing">
        Género
      </ACFormRadio>
      <ACFormRadio name="especie" :items="['Gato', 'Perro']" :disabled="!editing">
        Especie
      </ACFormRadio>
      <ACFormMultiLineInput :class="!editing ? 'col-span-2 bg-white border-none px-0' : 'col-span-2'
        " name="historia" :required="false" :disabled="!editing">
        Historia
      </ACFormMultiLineInput>
      <div class="flex gap-2 items-center col-start-2 justify-self-end">
        <ACButtonPrimary v-if="editing" class="flex items-center gap-1 w-fit mt-4" type="submit">
          <span class="icon-[carbon--save] text-xl"></span>
          Guardar
        </ACButtonPrimary>
        <ACButtonCancel v-if="editing" @click="onCancelEdit" class="flex items-center gap-1 w-fit mt-4">
          Cancel
        </ACButtonCancel>
      </div>
    </Form>
  </div>
</template>
