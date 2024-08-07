import { toTypedSchema } from "@vee-validate/yup";
import { InferType } from "yup";
import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  date: yup
    .string()
    .matches(/\d\d\d\d-\d\d-\d\d/)
    .required("La fecha de la vacuna es obligatoria")
    .transform((fecha: string) => {
      const [month, day, anio] = fecha.split("/");
      return `${anio}-${month}-${day}`;
    }),
  examen_previo: yup.string().required("El examen previo es obligatorio"),
});

export const typedSchema = toTypedSchema(schema);

export type Schema = InferType<typeof schema>;
