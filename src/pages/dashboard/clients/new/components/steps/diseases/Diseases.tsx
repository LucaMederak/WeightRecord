import React from "react";

//components
import MultipleAutocomplete from "@/components/form/multipleAutocomplete/MultipleAutocomplete";
import StepWrapper from "@/components/form/step/StepWrapper";

export const diseasesOptions = [
  { id: 1, name: "wzdęcia", type: "flatulence" },
  { id: 2, name: "zaparcia", type: "constipation" },
  { id: 3, name: "refluks", type: "reflux" },
  { id: 4, name: "otyłość", type: "obesity" },
  { id: 5, name: "osteoporoza", type: "osteoporosis" },
  { id: 6, name: "dna moczanowa", type: "gout" },
  { id: 7, name: "miażdżyca", type: "atherosclerosis" },
  { id: 8, name: "nadciśnienie tętnicze", type: "hypertension" },
  { id: 9, name: "nowotwór", type: "tumor" },
];

export const alergensOptions = [
  { id: 1, name: "orzechy", type: "peanuts" },
  { id: 2, name: "żyto", type: "rye" },
  { id: 3, name: "białko jaja", type: "eggProtein" },
];

const Diseases = () => {
  return (
    <>
      <StepWrapper title="Choroby i alergie">
        <MultipleAutocomplete
          name="diseases"
          label={`Choroby`}
          options={diseasesOptions}
          optionLabel="name"
          optionRender="type"
          fullWidth
        />
        <MultipleAutocomplete
          name="alergens"
          label={`Alergie`}
          options={alergensOptions}
          optionLabel="name"
          optionRender="type"
          fullWidth
        />
      </StepWrapper>
    </>
  );
};

export default Diseases;
