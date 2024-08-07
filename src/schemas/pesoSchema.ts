import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { InferType } from "yup";

export const schema = yup.object({
  peso_actual: yup
    .number()
    .typeError("El peso debe ser un número")
    .required("El peso es obligatorio"),
  fecha: yup
    .string()
    .matches(/\d\d\d\d-\d\d-\d\d/)
    .required("La fecha del aseo es obligatoria")
    .transform((fecha: string) => {
      const [month, day, anio] = fecha.split("/");
      return `${anio}-${month}-${day}`;
    }),
});

export const typedSchema = toTypedSchema(schema);

export type Schema = InferType<typeof schema>;
