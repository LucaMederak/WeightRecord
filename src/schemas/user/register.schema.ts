import { IRegisterUserInputData } from "@/interfaces/user.interfaces";
import * as yup from "yup";

export const registerUserSchema: yup.ObjectSchema<IRegisterUserInputData> = yup
  .object()
  .shape({
    name: yup.string().required("Imię jest wymagane").default(""),
    lastName: yup.string().required("Nazwisko jest wymagane").default(""),
    email: yup
      .string()
      .email("Wprowadzono nieprawidłowy adres email")
      .required("Email jest wymagany")
      .default(""),
    password: yup.string().required("Hasło jest wymagane").default(""),
  });

export const defaultRegisterUserInputData: IRegisterUserInputData =
  registerUserSchema.cast({});
