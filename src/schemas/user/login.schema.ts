import { ILoginUserInputData } from "@/interfaces/user.interfaces";
import * as yup from "yup";

export const loginUserSchema: yup.ObjectSchema<ILoginUserInputData> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Wprowadzono nieprawidłowy adres email")
      .required("Email jest wymagany")
      .default(""),
    password: yup.string().required("Hasło jest wymagane").default(""),
  });

export const defaultLoginUserInputData: ILoginUserInputData =
  loginUserSchema.cast({});
