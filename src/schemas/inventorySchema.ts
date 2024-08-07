import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";

const selectClasification: string[] = [
  "Anabólicos",
  "Analgésicos",
  "Antiácidos antiflautulentos",
  "Antibióticos",
  "Antidiarreicos ",
  "Antieméticos (nauseas, vómito)",
  "Antihemorrágicos",
  "Antiinflamatorios",
  "Antiintoxicantes",
  "Antiparasitarios externos, insecticidas",
  "Antiparasitarios internos",
  "Antisépticos, bactericidas",
  "Antiulcerosos",
  "Glucocorticoides",
  "Diuréticos",
  "Hematínicos",
  "Hemostáticos",
  "Hepatoprotectores",
  "Inmunoestimulantes",
  "Insecticidas para fumigar",
  "Mucolíticos",
  "Problemas cardíacos",
  "Problemas oftálmicos",
  "Problemas óticos y dérmicos",
  "Quimioterápicos",
  "Vitaminas",
  "Otros",
];

const selectStates: string[] = [
  "Nuevo",
  "Usado",
  "Usado/mitad",
  "Usado c/lleno",
  "Usado c/vacio",
];

const selectVias: string[] = ["Oral", "Inyect", "Tópica", "Emul"];

export const schema = toTypedSchema(
  yup.object({
    nombre: yup.string().required("El nombre es obligatorio"),
    laboratorio: yup.string().required("El laboratorio es obligatorio"),
    ingrediente_principal: yup
      .string()
      .required("El ingrediente principal es obligatorio"),
    origen: yup.string().required("El origen es obligatorio"),
    estado: yup
      .string()
      .oneOf(selectStates, "El estado debe ser uno de los valores predefinidos")
      .required("El estado es obligatorio"),
    formato: yup.string().required("El formato es obligatorio"),
    fecha_vencimiento: yup
      .string()
      .matches(/\d\d\d\d-\d\d-\d\d/)
      .required("La fecha de vencimiento es obligatoria")
      .transform((fecha: string) => {
        const [month, day, anio] = fecha.split("/");
        return `${anio}-${month}-${day}`;
      }),
    fecha_registro: yup
      .string()
      .matches(/\d\d\d\d-\d\d-\d\d/)
      .required("La fecha de registro es obligatoria")
      .transform((fecha: string) => {
        const [month, day, anio] = fecha.split("/");
        return `${anio}-${month}-${day}`;
      }),
    volumen: yup.string().required("El volumen es obligatorio"),
    caja: yup.string().required("La caja es obligatoria"),
    via: yup.string().oneOf(selectVias).required("La vía es obligatoria"),
    tipo: yup
      .string()
      .oneOf(selectClasification)
      .required("La clasificación es obligatoria"),
    cantidad: yup.string().required("La cantidad es obligatoria"),
  }),
);
