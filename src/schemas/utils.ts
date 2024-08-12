import * as yup from "yup";

export const image = yup
  .mixed()
  .required("La imagen es obligatoria")
  .test("image-size", "La imagen debe pesar menos de 3MB", (value) => {
    if (!value) return true;
    if (value instanceof File) {
      const size = value.size / 1024 / 1024;
      return size <= 3;
    }
  })
  .test("image-format", "La imagen debe ser jpg o png", (value) => {
    if (!value) return true;
    if (value instanceof File) {
      return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
    }
  });
