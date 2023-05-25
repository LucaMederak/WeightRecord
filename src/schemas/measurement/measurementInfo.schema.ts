import * as yup from "yup";

export const measurementInfoSchema = yup.object().shape({
  name: yup.string().required("To pole jest wymagane").default(""),
  client: yup.string().required("To pole jest wymagane").default(""),
  date: yup.date().required("To pole jest wymagane").default(new Date()),
  notes: yup.string().default(""),
});
