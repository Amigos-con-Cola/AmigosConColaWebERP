<script setup lang="ts">
import { typedSchema as schema, Schema } from "@/schemas/vacunaSchema";
import ACFormInput from "@/components/common/ACFormInput.vue";
import { useRoute, useRouter } from "vue-router";
import { useAnimal } from "@stores/animalStore.ts";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import { Form, SubmissionHandler } from "vee-validate";
import ACDatePicker from "@/components/common/ACDatePicker.vue";
import { useToast } from "@stores/toastStore.ts";
import { useSpinner } from "@stores/loadingSpinnerModalStore.ts";
import { useVacunas } from "@/stores/vacunaStore";

const router = useRouter();
const route = useRoute();
const id = parseInt(route.params.id as string);

const animal = useAnimal(id);
const vacunas = useVacunas(id);

const { toast } = useToast();
const spinner = useSpinner();

const onSubmit: SubmissionHandler<Schema> = async (values) => {
  try {
    await spinner.wait(async () => await vacunas.create(values));
    toast({ message: "La vacunación fue creada con éxito" });
    router.back();
  } catch {
    toast({
      message: "Hubo un error al crear la vacunación",
      severity: "error",
    });
  }
};
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl">Nueva Vacunación para {{ animal.data?.nombre }}</h1>
    <Form
      class="py-4 flex flex-col gap-4"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <ACFormInput name="name">Nombre</ACFormInput>
      <ACDatePicker name="date">Fecha</ACDatePicker>
      <ACFormInput name="examen_previo">Examen previo</ACFormInput>
      <ACButtonPrimary type="submit">
        <span class="icon-[carbon--save] text-xl"></span>
        Guardar
      </ACButtonPrimary>
    </Form>
  </div>
</template>
