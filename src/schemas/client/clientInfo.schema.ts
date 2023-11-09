import * as yup from "yup";
import { IClientInputData } from "@/interfaces/client.interfaces";

type IClientInfoInput = Pick<
  IClientInputData,
  | "firstName"
  | "surname"
  | "email"
  | "dateOfBirth"
  | "gender"
  | "pal"
  | "phoneNumber"
  | "street"
  | "zipCode"
  | "city"
  | "notes"
>;

export const clientInfoSchema: yup.ObjectSchema<IClientInfoInput> = yup
  .object()
  .shape({
    firstName: yup.string().required("To pole jest wymagane").default(""),
    surname: yup.string().required("To pole jest wymagane").default(""),
    email: yup
      .string()
      .email("Wprowadzono nieprawidłowy adres e-mail")
      .default(""),
    dateOfBirth: yup.string().required("To pole jest wymagane").default(""),
    gender: yup
      .string()
      .oneOf(["male", "female"], "To pole jest wymagane")
      .required("To pole jest wymagane")
      .default("male"),
    pal: yup
      .number()
      .positive("To pole jest wymagane")
      .required("To pole jest wymagane")
      .default(1.4),
    phoneNumber: yup.string().default(""),
    street: yup.string().default(""),
    zipCode: yup.string().default(""),
    city: yup.string().default(""),
    notes: yup.string().default(""),
  });
