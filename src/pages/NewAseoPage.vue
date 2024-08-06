<script setup lang="ts">
import { typedSchema as aseosSchema, Schema } from "@/schemas/aseoSchema";
import ACFormInput from "@/components/common/ACFormInput.vue";
import { useRoute, useRouter } from "vue-router";
import { useAnimal } from "@stores/animalStore.ts";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import { Form, SubmissionHandler } from "vee-validate";
import ACDatePicker from "@/components/common/ACDatePicker.vue";
import { useAseos } from "@stores/aseoStore.ts";
import { useToast } from "@stores/toastStore.ts";
import { useSpinner } from "@stores/loadingSpinnerModalStore.ts";

const router = useRouter();
const route = useRoute();
const id = parseInt(route.params.id as string);

const animal = useAnimal(id);
const aseos = useAseos(id);

const { toast } = useToast();
const spinner = useSpinner();

const onSubmit: SubmissionHandler<Schema> = async (values) => {
  try {
    const data = { idAnimal: id, ...values };
    await spinner.wait(async () => await aseos.create(data));
    toast({
      message: "El aseo fue creado con éxito",
    });
    router.back();
  } catch {
    toast({
      message: "Hubo un error al crear el aseo",
      severity: "error",
    });
  }
};
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl">Nuevo Aseo para {{ animal.data?.nombre }}</h1>
    <Form
      class="py-4 flex flex-col gap-4"
      :validation-schema="aseosSchema"
      @submit="onSubmit"
    >
      <ACFormInput name="tipo">Tipo</ACFormInput>
      <ACDatePicker name="fecha">Fecha</ACDatePicker>
      <ACButtonPrimary type="submit">
        <span class="icon-[carbon--save] text-xl"></span>
        Guardar
      </ACButtonPrimary>
    </Form>
  </div>
</template>
