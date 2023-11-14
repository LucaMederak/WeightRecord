import React from "react";
import { useRouter } from "next/router";

//form
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//components
import FormContainer from "@/components/form/container/FormContainer";

//steps
import * as Step from "../../../components/form/steps";

//schema
import {
  measurementSchema,
  defaultMeasurementInputData,
} from "@/schemas/measurement";
import { IMeasurementInputData } from "@/interfaces/measurement.interfaces";
import { handleApiErrors } from "@/utils/apiErrorsHandler";
import { addMeasurement } from "@/services/measurement.service";

const NewMeasurementForm = () => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(measurementSchema),
    shouldUnregister: false,
    defaultValues: defaultMeasurementInputData,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = methods;
  const { handleAlert } = useAlert();

  const onSubmit: SubmitHandler<IMeasurementInputData> = async (data) => {
    try {
      const newMeasurement = await addMeasurement(data);
      reset();
      handleAlert(
        "success",
        `Dodano nowy pomiar: ${newMeasurement.data.name} `
      );

      router.push("/dashboard/measurements");
    } catch (e) {
      const { alertMessage } = handleApiErrors(e);
      handleAlert(
        "error",
        `Dodawanie nowego pomiaru nie powiodło się. ${alertMessage}`
      );
    }
  };

  return (
    <FormContainer
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      buttonText="Dodaj pomiar"
      buttonVariant={isSubmitting || !isValid ? "disabled" : "primary"}
    >
      <Step.Info />
      <Step.Basic />
      <Step.Additional />
    </FormContainer>
  );
};

export default NewMeasurementForm;
