import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("Imię jest wymagane").default(""),
  lastName: yup.string().required("Nazwisko jest wymagane").default(""),
  email: yup
    .string()
    .email("Wprowadzono nieprawidłowy adres email")
    .required("Email jest wymagany")
    .default(""),
  password: yup.string().required("Hasło jest wymagane").default(""),
});

export type IRegisterSchema = yup.InferType<typeof registerSchema>;
export const registerDefaultValues = registerSchema.cast({});
