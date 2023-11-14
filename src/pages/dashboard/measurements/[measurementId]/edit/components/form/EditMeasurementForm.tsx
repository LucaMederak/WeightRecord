import React from "react";
import { useRouter } from "next/router";
import { IMeasurementData } from "@/interfaces/measurement.interfaces";

//form
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//components
import FormContainer from "@/components/form/container/FormContainer";

//steps
import * as Step from "../../../../components/form/steps";

//schema
import { measurementSchema } from "@/schemas/measurement";
import { IMeasurementInputData } from "@/interfaces/measurement.interfaces";
import { handleApiErrors } from "@/utils/apiErrorsHandler";
import { updateMeasurement } from "@/services/measurement.service";

const EditMeasurementForm = ({
  measurement,
}: {
  measurement: IMeasurementData;
}) => {
  const router = useRouter();

  const editMeasurementFormData: IMeasurementInputData = {
    ...measurement,
    client: measurement.client._id,
  };

  const methods = useForm({
    resolver: yupResolver(measurementSchema),
    shouldUnregister: false,
    defaultValues: editMeasurementFormData,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid, dirtyFields },
    reset,
  } = methods;
  const { handleAlert } = useAlert();

  const onSubmit: SubmitHandler<IMeasurementInputData> = async (data) => {
    try {
      const updatedMeasurement = await updateMeasurement(data, measurement._id);
      reset();
      handleAlert(
        "success",
        `Edytowano pomiar: ${updatedMeasurement.data.name} `
      );

      router.push(`/dashboard/measurements/${updatedMeasurement.data._id}`);
    } catch (e) {
      const { alertMessage } = handleApiErrors(e);
      handleAlert(
        "error",
        `Edytowanie pomiaru nie powiodło się. ${alertMessage}`
      );
    }
  };

  return (
    <FormContainer
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      buttonText="Edytuj pomiar"
      buttonVariant={isSubmitting || !isValid ? "disabled" : "primary"}
    >
      <Step.Info />
      <Step.Basic />
      <Step.Additional />
    </FormContainer>
  );
};

export default EditMeasurementForm;
