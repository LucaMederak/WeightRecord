import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Wprowadzono nieprawidłowy adres email")
    .required("Email jest wymagany")
    .default(""),
  password: yup.string().required("Hasło jest wymagane").default(""),
});

export type ILoginSchema = yup.InferType<typeof loginSchema>;
export const loginDefaultValues = loginSchema.cast({});
