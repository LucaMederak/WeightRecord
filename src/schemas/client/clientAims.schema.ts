import * as yup from "yup";
import { IClientInputData } from "@/interfaces/client.interfaces";

type IClientAimsInput = Pick<
  IClientInputData,
  "expectedBodyWeight" | "specificAims"
>;

export const clientAimsSchema: yup.ObjectSchema<IClientAimsInput> = yup
  .object()
  .shape({
    expectedBodyWeight: yup.number(),
    specificAims: yup.array(yup.string().required()).default([]),
  });
