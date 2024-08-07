<script setup lang="ts">
import { typedSchema as schema, Schema } from "@/schemas/desparasitacionSchema";
import ACFormInput from "@/components/common/ACFormInput.vue";
import ACFormRadio from "@/components/common/ACFormRadio.vue";
import { useRoute, useRouter } from "vue-router";
import { useAnimal } from "@stores/animalStore.ts";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import { Form, SubmissionHandler } from "vee-validate";
import ACDatePicker from "@/components/common/ACDatePicker.vue";
import { useToast } from "@stores/toastStore.ts";
import { useSpinner } from "@stores/loadingSpinnerModalStore.ts";
import { useDesparasitaciones } from "@/stores/desparasitacionStore";

const router = useRouter();
const route = useRoute();
const id = parseInt(route.params.id as string);

const animal = useAnimal(id);
const desparasitaciones = useDesparasitaciones(id);

const { toast } = useToast();
const spinner = useSpinner();

const onSubmit: SubmissionHandler<Schema> = async (values) => {
  try {
    await spinner.wait(async () => await desparasitaciones.create(values));
    toast({ message: "La desparasitación fue creada con éxito" });
    router.back();
  } catch {
    toast({
      message: "Hubo un error al crear la desparasitación",
      severity: "error",
    });
  }
};
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl">
      Nueva Desparasitación para {{ animal.data?.nombre }}
    </h1>
    <Form
      class="py-4 flex flex-col gap-4"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <ACFormInput name="producto">Producto</ACFormInput>
      <ACFormInput name="formato">Formato</ACFormInput>
      <ACDatePicker name="fecha">Fecha</ACDatePicker>
      <ACFormInput name="peso">Peso</ACFormInput>
      <ACFormRadio name="tipo" :items="['Interno', 'Externo']">
        Tipo
      </ACFormRadio>
      <ACButtonPrimary type="submit">
        <span class="icon-[carbon--save] text-xl"></span>
        Guardar
      </ACButtonPrimary>
    </Form>
  </div>
</template>
