<script setup lang="ts">
import { typedSchema as schema, Schema } from "@/schemas/pesoSchema";
import ACFormInput from "@/components/common/ACFormInput.vue";
import { useRoute, useRouter } from "vue-router";
import { useAnimal } from "@stores/animalStore.ts";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import { Form, SubmissionHandler } from "vee-validate";
import ACDatePicker from "@/components/common/ACDatePicker.vue";
import { useToast } from "@stores/toastStore.ts";
import { useSpinner } from "@stores/loadingSpinnerModalStore.ts";
import { usePesos } from "@stores/pesosStore.ts";

const router = useRouter();
const route = useRoute();
const id = parseInt(route.params.id as string);

const animal = useAnimal(id);
const pesos = usePesos(id);

const { toast } = useToast();
const spinner = useSpinner();

const onSubmit: SubmissionHandler<Schema> = async (values) => {
  try {
    await spinner.wait(async () => await pesos.create(values));
    toast({ message: "El peso fue registrado con éxito" });
    router.back();
  } catch {
    toast({
      message: "Hubo un error al registrar el peso",
      severity: "error",
    });
  }
};
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl">Registrar peso para {{ animal.data?.nombre }}</h1>
    <Form
      class="py-4 flex flex-col gap-4"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <ACFormInput name="peso_actual">Peso actual</ACFormInput>
      <ACDatePicker name="fecha">Fecha</ACDatePicker>
      <ACButtonPrimary type="submit">
        <span class="icon-[carbon--save] text-xl"></span>
        Guardar
      </ACButtonPrimary>
    </Form>
  </div>
</template>
