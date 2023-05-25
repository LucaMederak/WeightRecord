import React, { useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/router";

//form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//schema
import { measurementInfoSchema } from "@/schemas/measurement/measurementInfo.schema";
import { measurementBasicSchema } from "@/schemas/measurement/measurementBasic.schema";
import { measurementAdditionalSchema } from "@/schemas/measurement/measurementAdditional.schema";

//styles
import * as Styled from "./NewMeasurementForm.styles";

//components
import Button from "@/components/button/Button";
import ReactLoading from "react-loading";

//steps
import * as Step from "../steps";

const allMeasurementsSchemas = measurementInfoSchema
  .concat(measurementBasicSchema)
  .concat(measurementAdditionalSchema);

const defaultMeasurementsValues = allMeasurementsSchemas.cast({});

type IMeasurementValues = typeof defaultMeasurementsValues;

const NewMeasurementForm = () => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(allMeasurementsSchemas),
    shouldUnregister: false,
    defaultValues: defaultMeasurementsValues,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = methods;
  const { handleAlert } = useAlert();

  const onSubmit: SubmitHandler<IMeasurementValues> = async (data) => {
    try {
      const newMeasurement = await axiosInstance.post(
        `/api/measurements`,
        data,
        {
          withCredentials: true,
        }
      );

      reset();
      handleAlert("success", "Dodano nowy pomiar");
      router.push("/dashboard/measurements");
    } catch (e) {
      console.log(e);
      handleAlert("error", "Dodawanie nowego pomiaru nie powiodło się");
      router.push("/dashboard/measurements");
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
