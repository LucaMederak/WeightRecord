import * as yup from "yup";
import { IClientInputData } from "@/interfaces/client.interfaces";

type IClientDiseasesInput = Pick<IClientInputData, "diseases" | "alergens">;

export const clientDiseasesSchema: yup.ObjectSchema<IClientDiseasesInput> = yup
  .object()
  .shape({
    diseases: yup
      .array(
        yup
          .string()
          .oneOf([
            "flatulence",
            "constipation",
            "reflux",
            "obesity",
            "osteoporosis",
            "gout",
            "atherosclerosis",
            "hypertension",
            "tumor",
          ])
          .required()
      )
      .default([]),
    alergens: yup
      .array(yup.string().oneOf(["peanuts", "rye", "eggProtein"]).required())
      .default([]),
  });
