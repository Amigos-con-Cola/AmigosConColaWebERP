<script lang="ts" setup>
import {
  clasificaciones,
  status,
  typedSchema as medicineSchema,
  Schema,
  vias,
} from "@/schemas/inventorySchema.ts";
import ACFormInput from "@/components/common/ACFormInput.vue";
import ACFormSelectInput from "@/components/common/ACFormSelectInput.vue";
import { Form } from "vee-validate";
import ACDatePicker from "@/components/common/ACDatePicker.vue";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import { useRouter } from "vue-router";
import { useToast } from "@stores/toastStore.ts";
import { useSpinner } from "@stores/loadingSpinnerModalStore.ts";
import { useInventory } from "@stores/inventoryStore.ts";
import { Option } from "@/components/common/ACFormSelectInput.vue";

const inventory = useInventory();

const router = useRouter();
const { toast } = useToast();
const spinner = useSpinner();

const onSubmit = async (values: Schema) => {
  try {
    await spinner.wait(async () => await inventory.create(values));
    await router.push({ name: "inventory" });
    toast({
      message: "Producto registrado con éxito",
    });
  } catch (e) {
    console.error(e);
    toast({
      message: "Hubo un error al registrar el producto",
      severity: "error",
    });
  }
};
</script>

<template>
  <h1 class="text-2xl font-bold px-8 mt-4 mb-4">Crea una nueva medicina</h1>
  <Form
    :validation-schema="medicineSchema"
    class="px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 md:gap-x-8 md:gap-y-4"
    @submit="onSubmit"
  >
    <ACFormInput name="nombre">Nombre</ACFormInput>
    <ACFormInput name="laboratorio">Laboratorio</ACFormInput>
    <ACFormSelectInput :options="status" name="estado">
      Estado
    </ACFormSelectInput>
    <ACFormInput name="ingrediente_principal">
      Ingrediente principal
    </ACFormInput>
    <ACDatePicker name="fecha_vencimiento">Fecha de vencimiento</ACDatePicker>
    <ACDatePicker name="fecha_registro">Fecha de registro</ACDatePicker>
    <ACFormInput name="origen">Origen</ACFormInput>
    <ACFormInput name="formato">Formato</ACFormInput>
    <ACFormInput name="volumen">Volumen</ACFormInput>
    <ACFormInput name="caja">Caja</ACFormInput>
    <ACFormSelectInput :options="vias" name="via"> V/Adm</ACFormSelectInput>
    <ACFormInput name="cantidad">Cantidad</ACFormInput>
    <ACFormSelectInput :options="clasificaciones" name="tipo">
      Clasificación
    </ACFormSelectInput>
    <span></span>
    <ACButtonPrimary
      class="flex items-center gap-1 col-start-2 w-fit justify-self-end mt-4"
      type="submit"
    >
      <span class="icon-[carbon--save] text-xl"></span>
      Guardar
    </ACButtonPrimary>
  </Form>
</template>
