import React, { useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/router";

//form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//schema
import { clientInfoSchema } from "@/schemas/client/clientInfo.schema";
import { clientDiseasesSchema } from "@/schemas/client/clientDiseases.schema";
import { clientAimsSchema } from "@/schemas/client/clientAims.schema";

//styles
import * as Styled from "./EditClientForm.styles";

//components
import Button from "@/components/button/Button";
import ReactLoading from "react-loading";

//steps
import * as Step from "../steps";
import { IClientData } from "@/interfaces/client.interfaces";

const allClientSchemas = clientInfoSchema
  .concat(clientDiseasesSchema)
  .concat(clientAimsSchema);

const defaultClientsValues = allClientSchemas.cast({});

type IClientValues = typeof defaultClientsValues;

const EditClientForm = ({ client }: { client: IClientData }) => {
  const { handleAlert } = useAlert();

  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(allClientSchemas),
    shouldUnregister: false,
    defaultValues: {
      //info
      firstName: client.firstName,
      surname: client.surname,
      email: client.email,
      dateOfBirth: client.dateOfBirth,
      gender: client.gender,
      pal: client.pal,
      phoneNumber: client.phoneNumber,
      street: client.street,
      zipCode: client.zipCode,
      city: client.city,
      notes: client.notes,
      //aims
      expectedBodyWeight: client.expectedBodyWeight,
      specificAims: client.specificAims,
      //diseases
      diseases: client.diseases,
      alergens: client.alergens,
    },
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid, isDirty, dirtyFields },
    reset,
  } = methods;

  const onSubmit: SubmitHandler<IClientValues> = async (data) => {
    try {
      const editClient = await axiosInstance.put(
        `/api/clients/${client._id}`,
        data,
        {
          withCredentials: true,
        }
      );

      reset();
      handleAlert("success", "Edytowano klienta");
      router.push("/dashboard/clients");
    } catch (e) {
      console.log(e);
      handleAlert("error", "Edytowanie klienta nie powiodło się");
      router.push("/dashboard/clients");
    }
  };

  return (
    <FormProvider {...methods}>
      <Styled.FormContainer onSubmit={handleSubmit(onSubmit as any)}>
        <Step.BasicInfo />
        <Step.Aims />
        <Step.Diseases />
        <Styled.ButtonWrapper>
          <Button
            size={"large"}
            variant={
              isSubmitting || !isValid || Object.values(dirtyFields).length < 1
                ? "disabled"
                : "primary"
            }
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
              "Edytuj klienta"
            )}
          </Button>
        </Styled.ButtonWrapper>
      </Styled.FormContainer>
    </FormProvider>
  );
};

export default EditClientForm;
