import * as yup from "yup";
import { IMeasurementInputData } from "@/interfaces/measurement.interfaces";

type IMeasurementInfoInput = Pick<
  IMeasurementInputData,
  "name" | "client" | "date" | "notes"
>;

export const measurementInfoSchema: yup.ObjectSchema<IMeasurementInfoInput> =
  yup.object().shape({
    name: yup.string().required("To pole jest wymagane").default(""),
    client: yup.string().required("To pole jest wymagane").default(""),
    date: yup.date().required("To pole jest wymagane").default(new Date()),
    notes: yup.string().default(""),
  });
