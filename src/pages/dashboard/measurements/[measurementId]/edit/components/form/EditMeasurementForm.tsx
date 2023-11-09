import React from "react";
import { useRouter } from "next/router";
import { IMeasurementData } from "@/interfaces/measurement.interfaces";

//form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//styles
import * as Styled from "./EditMeasurementForm.styles";

//components
import Button from "@/components/button/Button";
import ReactLoading from "react-loading";

//steps
import * as Step from "../steps";

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
    <FormProvider {...methods}>
      <Styled.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Step.Info />
        <Step.Basic />
        <Step.Additional />
        <Styled.ButtonWrapper>
          <Button
            size={"large"}
            variant={isSubmitting || !isValid ? "disabled" : "primary"}
            type="submit"
          >
            {isSubmitting ? (
              <ReactLoading
                type={"spin"}
                color={"white"}
                height={20}
                width={20}
              />
            ) : (
              "Edytuj pomiar"
            )}
          </Button>
        </Styled.ButtonWrapper>
      </Styled.FormContainer>
    </FormProvider>
  );
};

export default EditMeasurementForm;
