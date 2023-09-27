import React, { useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/router";
import { useMeasurement } from "@/queries/useMeasurements";

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
import * as Styled from "./EditMeasurementForm.styles";

//components
import Button from "@/components/button/Button";
import ReactLoading from "react-loading";
import DataError from "@/components/dataError/DataError";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";

//steps
import * as Step from "../steps";

const allMeasurementsSchemas = measurementInfoSchema
  .concat(measurementBasicSchema)
  .concat(measurementAdditionalSchema);

const defaultMeasurementsValues = allMeasurementsSchemas.cast({});

type IMeasurementValues = typeof defaultMeasurementsValues;

const EditMeasurementForm = () => {
  const router = useRouter();

  const { measurementId } = router.query;

  const { measurement, measurementLoading, measurementError } = useMeasurement(
    measurementId as string
  );

  const editMeasurementFormData = {
    ...measurement,
    client: measurement?.client._id,
  };

  const methods = useForm({
    resolver: yupResolver(allMeasurementsSchemas),
    shouldUnregister: false,
    defaultValues: editMeasurementFormData,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = methods;
  const { handleAlert } = useAlert();

  useEffect(() => {
    if (measurement) {
      const editMeasurementFormData = {
        ...measurement,
        client: measurement?.client._id,
      };

      for (const [key, value] of Object.entries(editMeasurementFormData)) {
        methods.setValue(key as any, value);
      }
    }
  }, [measurement]);

  const onSubmit: SubmitHandler<IMeasurementValues> = async (data) => {
    try {
      const editMeasurement = await axiosInstance.put(
        `/api/measurements/${measurement?._id}`,
        data,
        {
          withCredentials: true,
        }
      );

      handleAlert("success", "Edytowano pomiar");
      router.push("/dashboard/measurements");
    } catch (e) {
      console.log(e);
      handleAlert("error", "Edytowanie pomiaru nie powiodło się");
    }
  };

  if (measurementLoading) return <LoadingGrid />;
  if (measurementError) return <DataError />;

  return (
    <FormProvider {...methods}>
      <Styled.FormContainer onSubmit={handleSubmit(onSubmit as any)}>
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
