import React from "react";
import { useRouter } from "next/router";
import { handleApiErrors } from "@/utils/apiErrorsHandler";

//form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//components
import FormContainer from "@/components/form/container/FormContainer";

//steps
import * as Step from "../../../../components/form/steps";
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
    <FormContainer
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      buttonText="Edytuj klienta"
      buttonVariant={
        isSubmitting || !isValid || Object.values(dirtyFields).length < 1
          ? "disabled"
          : "primary"
      }
    >
      <Step.BasicInfo />
      <Step.Aims />
      <Step.Diseases />
    </FormContainer>
  );
};

export default EditClientForm;
