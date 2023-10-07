import React, { useState } from "react";
import Input from "@/components/form/input/Input";
import StepWrapper from "@/components/form/step/StepWrapper";
import Autocomplete from "@/components/form/autocomplete/Autocomplete";
import DatePicker from "@/components/form/datePicker/DatePicker";
import { useFormContext } from "react-hook-form";

const genderOptions = [
  { id: 1, name: "mężczyzna", type: "male" },
  { id: 2, name: "kobieta", type: "female" },
];

const palOptions = [
  { id: 1, value: 1.3, type: "niska", description: "niska aktywność fizyczna" },
  { id: 2, value: 1.4, type: "niska", description: "niska aktywność fizyczna" },
  {
    id: 3,
    value: 1.5,
    type: "średnia",
    description: "średnia aktywność fizyczna",
  },
  {
    id: 4,
    value: 1.6,
    type: "średnia",
    description: "średnia aktywność fizyczna",
  },
  {
    id: 5,
    value: 1.7,
    type: "średnia",
    description: "średnia aktywność fizyczna",
  },
  {
    id: 6,
    value: 1.8,
    type: "wysoka",
    description: "wysoka aktywność fizyczna",
  },
  {
    id: 7,
    value: 1.9,
    type: "wysoka",
    description: "wysoka aktywność fizyczna",
  },
  {
    id: 8,
    value: 2.0,
    type: "wysoka",
    description: "wysoka aktywność fizyczna",
  },
  {
    id: 9,
    value: 2.1,
    type: "wysoka",
    description: "wysoka aktywność fizyczna",
  },
  {
    id: 10,
    value: 2.2,
    type: "wysoka",
    description: "wysoka aktywność fizyczna",
  },
];

const BasicInfo = () => {
  const {
    control,
    formState: { errors, isValid },
    setValue,
    watch,
    getValues,
    trigger,
  } = useFormContext();

  return (
    <>
      <StepWrapper requiredFields title="Podstawowe informacje">
        <Input label={`Imię *`} type="text" name="firstName" />
        <Input label={`Nazwisko *`} type="text" name="surname" />
        <Input label={`E-mail`} type="email" name="email" />
        <DatePicker label={`Data urodzenia *`} name="dateOfBirth" fullWidth />
        <Autocomplete
          name="gender"
          fullWidth
          label={`Płeć *`}
          options={genderOptions}
          optionLabel={"name"}
          optionRender={"type"}
        />
        <Autocomplete
          name="pal"
          fullWidth
          label={`Współczynnik aktywności fizycznej (PAL) *`}
          options={palOptions}
          optionLabel={"value"}
          optionRender={"value"}
        />
        <Input
          type="text"
          name="phoneNumber"
          label={`Numer telefonu`}
          fullWidth
        />
        <Input type="text" name="street" label={`Ulica`} fullWidth />
        <Input type="text" name="zipCode" label={`Kod pocztowy`} fullWidth />
        <Input type="text" name="city" label={`Miasto`} fullWidth />
        <Input type="text" name="notes" label={`Notatki`} fullWidth textarea />
      </StepWrapper>
    </>
  );
};

export default BasicInfo;
