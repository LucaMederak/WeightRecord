import * as yup from "yup";

export const clientAimsSchema = yup.object().shape({
  expectedBodyWeight: yup.number(),
  specificAims: yup.array(yup.string()).default([]),
});
