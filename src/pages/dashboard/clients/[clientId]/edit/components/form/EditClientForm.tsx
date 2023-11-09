import React from "react";
import { useRouter } from "next/router";
import { handleApiErrors } from "@/utils/apiErrorsHandler";

//form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//styles
import * as Styled from "./EditClientForm.styles";

//components
import Button from "@/components/button/Button";
import ReactLoading from "react-loading";

//steps
import * as Step from "../steps";
import { IClientData } from "@/interfaces/client.interfaces";

//services
import { updateClient } from "@/services/client.service";

//schema
import { clientSchema } from "@/schemas/client";
import { IClientInputData } from "@/interfaces/client.interfaces";

const EditClientForm = ({ client }: { client: IClientData }) => {
  const { handleAlert } = useAlert();

  const router = useRouter();

  const defaultFormValues: IClientInputData = {
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
  };

  const methods = useForm({
    resolver: yupResolver(clientSchema),
    shouldUnregister: false,
    defaultValues: defaultFormValues,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid, isDirty, dirtyFields },
    reset,
  } = methods;

  const onSubmit: SubmitHandler<IClientInputData> = async (data) => {
    try {
      const updatedClient = await updateClient(data, client._id);

      reset();
      handleAlert(
        "success",
        `Edytowano klienta: ${
          updatedClient.data.firstName + " " + updatedClient.data.surname
        } `
      );
      router.push(`/dashboard/clients/${updatedClient.data._id}`);
    } catch (e) {
      const { alertMessage } = handleApiErrors(e);
      handleAlert(
        "error",
        `Edytowanie klienta nie powiodło się. ${alertMessage}`
      );
    }
  };

  return (
    <FormProvider {...methods}>
      <Styled.FormContainer onSubmit={handleSubmit(onSubmit)}>
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
