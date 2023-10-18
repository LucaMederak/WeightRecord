import React, { useEffect } from "react";

//components
import Input from "@/components/form/input/Input";
import StepWrapper from "@/components/form/step/StepWrapper";

import { useFormContext } from "react-hook-form";
import formatDistance from "date-fns/formatDistance";
import differenceInYears from "date-fns/differenceInYears";

//queries
import { useClient } from "@/queries/useClients";

//helpers
import { ppmHelper } from "@/helpers/ppm";
import { cpmHelper } from "@/helpers/cpm";
import { bmiHelper } from "@/helpers/bmi";

const BasicData = () => {
  const {
    control,
    formState: { errors, isValid },
    setValue,
    watch,
    getValues,
  } = useFormContext();

  const clientId = getValues("client") as string;
  const weight = watch("weight");
  const height = watch("height");

  const { client } = useClient(clientId);

  const age =
    client && differenceInYears(new Date(), new Date(client.dateOfBirth));
  const gender = client?.gender;
  const pal = client?.pal;

  useEffect(() => {
    if (gender && age && weight && height && pal) {
      const ppm = ppmHelper(gender, weight, height, age);
      const cpm = cpmHelper(ppm.ppm_harris, pal);
      const bmi = bmiHelper(weight, height);

      setValue("ppmHarris", ppm.ppm_harris);
      setValue("ppmMifflin", ppm.ppm_mifflin);
      setValue("cpm", cpm);
      return setValue("bmi", bmi);
    }

    setValue("ppmHarris", 0);
    setValue("ppmMifflin", 0);
    setValue("cpm", 0);
    return setValue("bmi", 0);
  }, [gender, age, weight, height, pal]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = !e.currentTarget.value
      ? null
      : parseFloat(parseFloat(e.currentTarget.value).toFixed(2));

    setValue(e.currentTarget.name, value);
  };

  return (
    <StepWrapper title="Podstawowe dane pomiaru">
      <Input
        label={`Masa ciała (kg) *`}
        type="number"
        name="weight"
        onChange={handleChange}
        controlled
        fullWidth
      />
      <Input
        label={`Wysokość ciała (cm) *`}
        type="number"
        name="height"
        onChange={handleChange}
        controlled
        fullWidth
      />

      <Input
        label={`PPM (Harris) *`}
        type="number"
        name="ppmHarris"
        fullWidth
        disabled
      />
      <Input
        label={`PPM (Mifflin) *`}
        type="number"
        name="ppmMifflin"
        fullWidth
        disabled
      />
      <Input
        label={`CPM (Całkowita Przemiana Materii) *`}
        type="number"
        name="cpm"
        fullWidth
        disabled
      />
      <Input label={`BMI *`} type="number" name="bmi" fullWidth disabled />
    </StepWrapper>
  );
};

export default BasicData;
