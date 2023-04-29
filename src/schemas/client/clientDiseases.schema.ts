import * as yup from "yup";

export const clientDiseasesSchema = yup.object().shape({
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
    )
    .default([]),
  alergens: yup
    .array(yup.string().oneOf(["peanuts", "rye", "eggProtein"]))
    .default([]),
});
