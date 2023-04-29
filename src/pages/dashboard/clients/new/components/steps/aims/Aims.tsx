import React, { useState } from "react";

//components
import Input from "@/components/form/input/Input";
import StepWrapper from "@/components/form/step/StepWrapper";
import MultipleAutocomplete from "@/components/form/multipleAutocomplete/MultipleAutocomplete";

export const aimsOptions = [
  { id: 1, name: "poprawa samopoczucia", type: "improvedWellBeing" },
  { id: 2, name: "poprawa jakości snu", type: "improvedQualityOfSleep" },
  {
    id: 3,
    name: "poprawa nawyków żywieniowych",
    type: "improvedEatingHabits",
  },
  {
    id: 4,
    name: "poprawa wyników sportowych",
    type: "improvedSportPerformance",
  },
  { id: 5, name: "poprawa regeneracji", type: "improvedRegeneration" },
  { id: 6, name: "ograniczenie używek", type: "restrictionOfStimulants" },
];

const Aims = () => {
  return (
    <>
      <StepWrapper requiredFields title="Cele">
        <Input
          type="text"
          name="expectedBodyWeight"
          label={`Oczekiwana masa ciała`}
          fullWidth
        />
        <MultipleAutocomplete
          name="specificAims"
          label={`Cele szczegółowe *`}
          options={aimsOptions}
          optionLabel="name"
          optionRender="type"
          fullWidth
        />
      </StepWrapper>
    </>
  );
};

export default Aims;
