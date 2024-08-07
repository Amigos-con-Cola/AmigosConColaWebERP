import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { InferType } from "yup";

export const schema = yup.object({
  nombre: yup
    .string()
    .matches(/^[A-Za-z]+$/, "El nombre debe contener solo letras")
    .required("El nombre es obligatorio"),
  edad: yup
    .number()
    .typeError("La edad debe ser un número")
    .integer("La edad debe ser un número entero")
    .min(0, "La edad debe ser mayor a cero")
    .max(20, "La edad debe ser menor a 20")
    .required("La edad es obligatoria"),
  adoptado: yup.boolean().optional().default(false),
  genero: yup
    .string()
    .oneOf(["Female", "Male"], "El género debe ser femenino o masculino")
    .required("El género es obligatorio")
    .transform((genero: string) =>
      genero === "Femenino" ? "Female" : genero === "Masculino" ? "Male" : null,
    ),
  especie: yup
    .string()
    .oneOf(["Cat", "Dog"], "La especie debe ser gato o perro")
    .required("La especie es obligatoria")
    .transform((value: string) =>
      value === "Gato" ? "Cat" : value === "Perro" ? "Dog" : null,
    ),
  historia: yup.string().nullable(),
  ubicacion: yup.string().required("La ubicación es obligatoria"),
  peso: yup
    .number()
    .typeError("El peso debe ser un número")
    .required("El peso es obligatorio"),
  codigo: yup.string().nullable(),
});

export const typedSchema = toTypedSchema(schema);

export type Schema = InferType<typeof schema>;
