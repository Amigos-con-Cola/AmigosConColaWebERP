import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { InferType } from "yup";

export const schema = yup.object({
  tipo: yup
    .string()
    .oneOf(["Interno", "Externo"])
    .required("El tipo es obligatorio"),
  producto: yup.string().required("El producto es obligatorio"),
  peso: yup.number().required("El peso es obligatorio"),
  formato: yup.string().required("El formato es obligatorio"),
  fecha: yup
    .string()
    .matches(/\d\d\d\d-\d\d-\d\d/)
    .required("La fecha de la desparasitación es obligatoria")
    .transform((fecha: string) => {
      const [month, day, anio] = fecha.split("/");
      return `${anio}-${month}-${day}`;
    }),
});

export const typedSchema = toTypedSchema(schema);

export type Schema = InferType<typeof schema>;
