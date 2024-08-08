<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import FormSelect from "@/components/FormSelect.vue";
import { InferType } from "yup";

const router = useRouter();

const schema = yup.object({
  nombre: yup
    .string()
    .min(3, "Debe tener al menos 3 caracteres")
    .max(10, "Debe tener máximo 10 caracteres")
    .required("Por favor, ingrese un nombre."),
  ingrediente_principal: yup
    .string()
    .required("Por favor, ingrese un ingrediente."),
  laboratorio: yup
    .string()
    .required("Por favor, ingrese el nombre de un laboratorio"),
  formato: yup.string().required("Por favor, ingrese un formato."),
  volumen: yup
    .number()
    .typeError("El volumen debe ser un número válido")
    .required("Por favor, ingrese el volumen.")
    .positive("El volumen debe ser un número positivo"),
  caja: yup
    .number()
    .typeError("La caja debe ser un número válido")
    .required("Por favor, ingrese la cantidad de cajas.")
    .positive("La cantidad de cajas debe ser un número positivo")
    .integer("La cantidad de cajas debe ser número entero"),
  cantidad: yup
    .number()
    .typeError("La cantidad debe ser un número válido")
    .required("Por favor, ingrese la cantidad.")
    .positive("La cantidad debe ser un número positivo")
    .integer("La cantidad debe ser número entero"),
  fecha_vencimiento: yup
    .date()
    .optional()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr)),
  fecha_registro: yup
    .date()
    .optional()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr)),
  origen: yup.string().required("Obligatorio"),
  via: yup.string().required("Obligatorio"),
  estado: yup.string().required("Obligatorio"),
  tipo: yup.string().required("Obligatorio"),
});
const inventoryRegistrationSchema = toTypedSchema(schema);

const selectOptionsForOrigen = [
  { value: "Argentina", label: "Argentina" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Francia", label: "Francia" },
  { value: "Alemania", label: "Alemania" },
  { value: "EAU", label: "EAU" },
  { value: "Colombia", label: "Colombia" },
  { value: "Italia", label: "Italia" },
  { value: "España", label: "España" },
  { value: "USA", label: "USA" },
  { value: "India", label: "India" },
  { value: "Chile", label: "Chile" },
  { value: "Belgica", label: "Belgica" },
  { value: "Suiza", label: "Suiza" },
  { value: "Peru", label: "Peru" },
  { value: "Mexico", label: "Mexico" },
  { value: "Dinamarca", label: "Dinamarca" },
];

const selectOptionsForEstado = [
  { value: "Nuevo", label: "Nuevo" },
  { value: "Usado", label: "Usado" },
  { value: "Usado/mitad", label: "Usado/mitad" },
  { value: "Usado c/lleno", label: "Usado c/lleno" },
  { value: "Usado c/vacio", label: "Usado c/vacio" },
];

const selectOptionsForVdam = [
  { value: "Topica", label: "Tópica" },
  { value: "Oral", label: "Oral" },
  { value: "Inyect", label: "Inyect" },
  { value: "Emul", label: "Emul" },
];

const selectOptionsForClasificacion = [
  { value: "Anabolicos", label: "Anabólicos" },
  { value: "Analgesicos", label: "Analgésicos" },
  { value: "AntiacidosAntiflautulentos", label: "Antiácidos antiflautulentos" },
  { value: "Antibioticos", label: "Antibióticos" },
  { value: "Antidiarreicos", label: "Antidiarreicos" },
  { value: "Antiemeticos", label: "Antieméticos (náuseas, vómito)" },
  { value: "Antihemorragicos", label: "Antihemorrágicos" },
  { value: "Antiinflamatorios", label: "Antiinflamatorios" },
  { value: "Antiintoxicantes", label: "Antiintoxicantes" },
  {
    value: "AntiparasitariosExternosInsecticidas",
    label: "Antiparasitarios externos, insecticidas",
  },
  { value: "AntiparasitariosInternos", label: "Antiparasitarios internos" },
  { value: "AntisepticosBactericidas", label: "Antisépticos, bactericidas" },
  { value: "Antiulcerosos", label: "Antiulcerosos" },
  { value: "Glucocorticoides", label: "Glucocorticoides" },
  { value: "Diureticos", label: "Diuréticos" },
  { value: "Hematinicos", label: "Hematínicos" },
  { value: "Hemostaticos", label: "Hemostáticos" },
  { value: "Hepatoprotectores", label: "Hepatoprotectores" },
  { value: "Inmunoestimulantes", label: "Inmunoestimulantes" },
  { value: "InsecticidasParaFumigar", label: "Insecticidas para fumigar" },
  { value: "Mucoliticos", label: "Mucolíticos" },
  { value: "ProblemasCardiacos", label: "Problemas cardíacos" },
  { value: "ProblemasOftalmicos", label: "Problemas oftálmicos" },
  { value: "ProblemasOticosYDermicos", label: "Problemas óticos y dérmicos" },
  { value: "Quimioterapicos", label: "Quimioterápicos" },
  { value: "Vitaminas", label: "Vitaminas" },
  { value: "Varios", label: "Varios" },
];

function returnToInventory() {
  router.push({
    name: "crear-item",
  });
}

const onSubmit = async (values: InferType<typeof schema>) => {
  try {
    //falta completar esto
    await router.push("/crear-item");
  } catch {
    // TODO: Show error in toast.
  }
};
</script>

<template>
  <div class="h-screen text-center">
    <Form
      :validation-schema="inventoryRegistrationSchema"
      as="div"
      @submit="onSubmit"
    >
      <h2 class="text-2xl md:text-4xl font-bold text-left m-0">
        Crear Producto de Inventario
      </h2>
      <div class="flex flex-wrap w-screen px-8 lg:px-16 mt-6 mb-6">
        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <label
            class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
            for="nombre"
            >Nombre
          </label>
          <Field
            type="text"
            name="nombre"
            placeholder="Nombre del producto"
            id="nombre"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage name="nombre" class="text-red-600 text-left" />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <label
            class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
            for="fecha_vencimiento"
            >Fecha de Vencimiento
          </label>
          <Field
            type="date"
            name="fecha_vencimiento"
            id="fecha_vencimiento"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage
            name="fecha_vencimiento"
            class="text-red-600 text-left"
          />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <label
            class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
            for="laboratorio"
            >Laboratorio
          </label>
          <Field
            type="text"
            name="laboratorio"
            placeholder="Nombre del laboratorio"
            id="laboratorio"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage name="laboratorio" class="text-red-600 text-left" />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <label
            class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
            for="ingrediente_principal"
            >Ingrediente Principal
          </label>
          <Field
            type="text"
            name="ingrediente_principal"
            placeholder="Ingrediente Principal"
            id="ingrediente_principal"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage
            name="ingrediente_principal"
            class="text-red-600 text-left"
          />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <Field
            v-slot="{ value, field, errorMessage }"
            :validate-on-input="true"
            name="origen"
          >
            <label
              class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              for="origen"
              >Origen
            </label>
            <div class="flex flex-col w-full">
              <FormSelect
                :disabled="false"
                v-bind="field"
                :options="selectOptionsForOrigen"
                :tipo-edad="value"
                placeholder="Pais"
              />
              <span class="text-red-600 dark:text-red-500 text-left">
                {{ errorMessage }}
              </span>
            </div>
          </Field>
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <Field
            v-slot="{ value, field, errorMessage }"
            :validate-on-input="true"
            name="estado"
          >
            <label
              class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              for="estado"
              >Estado
            </label>
            <div class="flex flex-col w-full">
              <FormSelect
                :disabled="false"
                v-bind="field"
                :options="selectOptionsForEstado"
                :tipo-edad="value"
                placeholder="Estado"
              />
              <span class="text-red-600 dark:text-red-500 text-left">
                {{ errorMessage }}
              </span>
            </div>
          </Field>
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <label
            class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
            for="formato"
            >Formato
          </label>
          <Field
            type="text"
            name="formato"
            placeholder="Formato"
            id="formato"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage name="formato" class="text-red-600 text-left" />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <label
            class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
            for="fecha_registro"
            >Fecha de Registro
          </label>
          <Field
            type="date"
            name="fecha_registro"
            id="fecha_registro"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage name="fecha_registro" class="text-red-600 text-left" />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <label
            class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
            for="volumen"
            >Volumen
          </label>
          <Field
            type="text"
            name="volumen"
            placeholder="30g"
            id="volumen"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage name="volumen" class="text-red-600 text-left" />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <label
            class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
            for="caja"
            >Caja
          </label>
          <Field
            type="text"
            name="caja"
            placeholder="0"
            id="caja"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage name="caja" class="text-red-600 text-left" />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <Field
            v-slot="{ value, field, errorMessage }"
            :validate-on-input="true"
            name="via"
          >
            <label
              class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              for="via"
              >V/Adm
            </label>
            <div class="flex flex-col w-full">
              <FormSelect
                :disabled="false"
                v-bind="field"
                :options="selectOptionsForVdam"
                :tipo-edad="value"
                placeholder="V/Adm"
              />
              <span class="text-red-600 dark:text-red-500 text-left">
                {{ errorMessage }}
              </span>
            </div>
          </Field>
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <label
            class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
            for="cantidad"
            >Cantidad
          </label>
          <Field
            type="text"
            name="cantidad"
            placeholder="0"
            id="cantidad"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage name="cantidad" class="text-red-600 text-left" />
        </div>

        <div class="w-full lg:w-1/2 flex flex-col lg:px-24 mb-4">
          <Field
            v-slot="{ value, field, errorMessage }"
            :validate-on-input="true"
            name="tipo"
          >
            <label
              class="mr-[0.19rem] w-[10rem] md:mr-[1.3rem] sm:mr-[0.6rem] lg:mr-[0.05rem] flex sm:w-[6.5rem] lg:w-52 md:w-52 font-medium text-gray-900 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]"
              for="tipo"
              >Clasificación
            </label>
            <div class="flex flex-col w-full">
              <FormSelect
                :disabled="false"
                v-bind="field"
                :options="selectOptionsForClasificacion"
                :tipo-edad="value"
                placeholder="Clasificación"
              />
              <span class="text-red-600 dark:text-red-500 text-left">
                {{ errorMessage }}
              </span>
            </div>
          </Field>
        </div>
      </div>
      <button
        @click="returnToInventory"
        class="bg-surface drop-shadow font-normal border border-gray-200 hover:bg-gray-100 hover:text-primary hover:font-bold px-5 shadow-3xl rounded-full text-xs sm:py-2.5 md:text-[0.9rem] sm:text-[0.79rem] sm:px-5 lg:text-md py-3 md:px-6 md:py-2.5 lg:px-8 lg:py-4 mr-4 sm:mr-10 md:mr-10 lg:mr-10"
        type="button"
      >
        Atras
      </button>
      <button
        class="bg-primary drop-shadow text-white hover:bg-primary/75 hover:font-bold font-medium shadow-3xl rounded-full text-xs md:text-[0.9rem] sm:text-[0.79rem] sm:py-2 sm:text-base sm:px-6 lg:text-md py-3 px-5 md:px-6 md:py-2.5 lg:px-8 lg:py-3"
        type="submit"
      >
        Guardar
      </button>
    </Form>
  </div>
</template>
