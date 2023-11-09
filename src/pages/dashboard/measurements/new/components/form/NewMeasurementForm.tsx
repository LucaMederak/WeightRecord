import React from "react";
import { useRouter } from "next/router";

//form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//styles
import * as Styled from "./NewMeasurementForm.styles";

//components
import Button from "@/components/button/Button";
import ReactLoading from "react-loading";

//steps
import * as Step from "../steps";

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
              "Dodaj pomiar"
            )}
          </Button>
        </Styled.ButtonWrapper>
      </Styled.FormContainer>
    </FormProvider>
  );
};

export default NewMeasurementForm;
