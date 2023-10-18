import * as yup from "yup";

export const measurementBasicSchema = yup.object().shape({
  weight: yup
    .number()
    .positive("Wartość musi być większa od 0")
    .required("To pole jest wymagane")
    .default(0),
  height: yup
    .number()
    .positive("Wartość musi być większa od 0")
    .required("To pole jest wymagane")
    .default(0),
  bmi: yup.number().positive().required("To pole jest wymagane").default(0),
  ppmMifflin: yup
    .number()
    .positive("Wartość musi być większa od 0")
    .required("To pole jest wymagane")
    .default(0),
  ppmHarris: yup
    .number()
    .positive("Wartość musi być większa od 0")
    .required("To pole jest wymagane")
    .default(0),
  cpm: yup
    .number()
    .positive("Wartość musi być większa od 0")
    .required("To pole jest wymagane")
    .default(0),
});
