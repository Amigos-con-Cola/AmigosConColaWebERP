<script lang="ts" setup>
import { schema as medicineSchema } from "@/schemas/inventorySchema.ts";
import ACFormInput from "@/components/common/ACFormInput.vue";
import ACFormSelectInput from "@/components/common/ACFormSelectInput.vue";
import { Form } from "vee-validate";
import ACDatePicker from "@/components/common/ACDatePicker.vue";
import ACButtonPrimary from "@/components/common/buttons/ACButtonPrimary.vue";
import { useRouter } from "vue-router";
import { useToast } from "@stores/toastStore.ts";
import { useSpinner } from "@stores/loadingSpinnerModalStore.ts";
import { useInventory } from "@stores/inventoryStore.ts";

const inventory = useInventory();

const router = useRouter();
const { toast } = useToast();
const spinner = useSpinner();

interface Option {
  value: string;
  label: string;
}

const selectClasification: Option[] = [
  { value: "Anabólicos", label: "Anabólicos" },
  { value: "Analgésicos", label: "Analgésicos" },
  {
    value: "Antiácidos antiflautulentos",
    label: "Antiácidos antiflautulentos",
  },
  { value: "Antibióticos", label: "Antibióticos" },
  { value: "Antidiarreicos", label: "Antidiarreicos" },
  {
    value: "Antieméticos (nauseas, vómito)",
    label: "Antieméticos (nauseas, vómito)",
  },
  { value: "Antihemorrágicos", label: "Antihemorrágicos" },
  { value: "Antiinflamatorios", label: "Antiinflamatorios" },
  { value: "Antiintoxicantes", label: "Antiintoxicantes" },
  {
    value: "Antiparasitarios externos, insecticidas",
    label: "Antiparasitarios externos, insecticidas",
  },
  { value: "Antiparasitarios internos", label: "Antiparasitarios internos" },
  { value: "Antisépticos, bactericidas", label: "Antisépticos, bactericidas" },
  { value: "Antiulcerosos", label: "Antiulcerosos" },
  { value: "Glucocorticoides", label: "Glucocorticoides" },
  { value: "Diuréticos", label: "Diuréticos" },
  { value: "Hematínicos", label: "Hematínicos" },
  { value: "Hemostáticos", label: "Hemostáticos" },
  { value: "Hepatoprotectores", label: "Hepatoprotectores" },
  { value: "Inmunoestimulantes", label: "Inmunoestimulantes" },
  { value: "Insecticidas para fumigar", label: "Insecticidas para fumigar" },
  { value: "Mucolíticos", label: "Mucolíticos" },
  { value: "Problemas cardíacos", label: "Problemas cardíacos" },
  { value: "Problemas oftálmicos", label: "Problemas oftálmicos" },
  {
    value: "Problemas óticos y dérmicos",
    label: "Problemas óticos y dérmicos",
  },
  { value: "Quimioterápicos", label: "Quimioterápicos" },
  { value: "Vitaminas", label: "Vitaminas" },
  { value: "Otros", label: "Otros" },
];

const selectStates: Option[] = [
  { value: "Usado", label: "Usado" },
  { value: "Usado/mitad", label: "Usado/mitad" },
  { value: "Usado c/lleno", label: "Usado c/lleno" },
  { value: "Usado c/vacio", label: "Usado c/vacio" },
];

const selectVias: Option[] = [
  { value: "Oral", label: "Oral" },
  { value: "Inyect", label: "Inyect" },
  { value: "Tópica", label: "Tópica" },
  { value: "Emul", label: "Emul" },
];

const onSubmit = async (values) => {
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
    <ACFormSelectInput
      :items="selectStates"
      name="estado"
      selectedOption="Nuevo"
      >Estado
    </ACFormSelectInput>
    <ACFormInput name="ingrediente_principal"
      >Ingrediente principal
    </ACFormInput>
    <ACDatePicker name="fecha_vencimiento">Fecha de vencimiento</ACDatePicker>
    <ACDatePicker name="fecha_registro">Fecha de registro</ACDatePicker>
    <ACFormInput name="origen">Origen</ACFormInput>
    <ACFormInput name="formato">Formato</ACFormInput>
    <ACFormInput name="volumen">Volumen</ACFormInput>
    <ACFormInput name="caja">Caja</ACFormInput>
    <ACFormSelectInput
      :items="selectVias"
      name="Seleccione una via"
      selected-option="Oral"
    >
      V/Adm
    </ACFormSelectInput>
    <ACFormInput name="cantidad">Cantidad</ACFormInput>
    <ACFormSelectInput
      :items="selectClasification"
      name="tipo"
      selectedOption="seleccione una clasificación"
    >
      Clasificación
    </ACFormSelectInput>
    <ACButtonPrimary
      class="flex items-center gap-1 col-start-2 w-fit justify-self-end mt-4"
      type="submit"
    >
      <span class="icon-[carbon--save] text-xl"></span>
      Guardar
    </ACButtonPrimary>
  </Form>
</template>
