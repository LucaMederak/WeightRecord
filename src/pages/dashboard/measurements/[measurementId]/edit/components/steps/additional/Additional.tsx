import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

//components
import Input from "@/components/form/input/Input";
import StepWrapper from "@/components/form/step/StepWrapper";

const AdditionalData = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useFormContext();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = !e.currentTarget.value
      ? undefined
      : parseFloat(parseFloat(e.currentTarget.value).toFixed(2));

    setValue(e.currentTarget.name, value);
  };

  return (
    <StepWrapper title="Dodatkowe dane pomiaru">
      <Input
        label={`Obwód klatki piersiowej we wdechu (cm)`}
        type="number"
        name="chest_breath"
        fullWidth
      />
      <Input
        label={`Obwód klatki piersiowej w wydechu (cm)`}
        type="number"
        name="chest_exhaust"
        fullWidth
      />
      <Input
        label={`Obwód ramienia (cm)`}
        type="number"
        name="shoulder"
        fullWidth
      />
      <Input
        label={`Obwód ramienia w napięciu (cm)`}
        type="number"
        name="shoulder_tonus"
        fullWidth
      />
      <Input
        label={`Obwód talii (cm)`}
        type="number"
        name="waist"
        fullWidth
        controlled
        onChange={handleChange}
      />
      <Input
        label={`Obwód bioder (cm)`}
        type="number"
        name="hip"
        fullWidth
        controlled
        onChange={handleChange}
      />
      <Input
        label={`Obwód przedramienia (cm)`}
        type="number"
        name="forearm"
        fullWidth
      />
      <Input label={`Obwód uda (cm)`} type="number" name="thigh" fullWidth />
      <Input label={`Obwód łydki (cm)`} type="number" name="calf" fullWidth />
      <Input
        label={`Grubość fałdu skórno-tłuszczowego nad bicepsem (cm)`}
        type="number"
        name="biceps"
        fullWidth
      />
      <Input
        label={`Grubość fałdu skórno-tłuszczowego nad tricepsem (cm)`}
        type="number"
        name="triceps"
        fullWidth
      />
      <Input
        label={`Grubość fałdu skórno-tłuszczowego pod dolnym kątem łopatki (cm)`}
        type="number"
        name="shoulder_blade"
        fullWidth
      />
      <Input
        label={`Grubość fałdu skórno-tłuszczowego nad talerzem biodrowym (cm)`}
        type="number"
        name="ala_of_ilium"
        fullWidth
      />
      <Input
        label={`Grubość fałdu skórno-tłuszczowego nad kolcem biodrowym przednim górnym (cm)`}
        type="number"
        name="iliac_spine"
        fullWidth
      />
      <Input
        label={`Wskaźnik WHtR talia/wzrost`}
        type="number"
        name="whtr"
        fullWidth
        disabled
      />
      <Input
        label={`Wskaźnik WHR talia/biodra`}
        type="number"
        name="whr"
        fullWidth
        disabled
      />
      <Input
        label={`Procentowa zawartość tkanki tłuszczowej YMCA`}
        type="number"
        name="ymca"
        fullWidth
        disabled
      />
    </StepWrapper>
  );
};

export default AdditionalData;
