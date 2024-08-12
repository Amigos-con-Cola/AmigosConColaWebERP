import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { InferType } from "yup";
import { image } from "@/schemas/utils.ts";

export const schema = yup.object({
  imagen: image,
});

export const typedSchema = toTypedSchema(schema);

export type Schema = InferType<typeof schema>;
