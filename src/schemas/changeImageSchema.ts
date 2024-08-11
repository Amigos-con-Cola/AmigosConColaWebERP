import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { InferType } from "yup";

export const schema = yup.object({
  imagen: yup
    .mixed()
    .required("La imagen es obligatoria")
    .test("image-format", "La imagen debe ser jpg o png", (value) => {
      if (!value) return true;
      if (value instanceof File) {
        return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
      }
    }),
});

export const typedSchema = toTypedSchema(schema);

export type Schema = InferType<typeof schema>;
