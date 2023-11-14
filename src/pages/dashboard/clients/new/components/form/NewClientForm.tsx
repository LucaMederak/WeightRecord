import React from "react";
import { useRouter } from "next/router";
import { handleApiErrors } from "@/utils/apiErrorsHandler";

//form
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//schema
import { clientSchema, defaultClientInputData } from "@/schemas/client";
import { IClientInputData } from "@/interfaces/client.interfaces";

//steps
import * as Step from "../../../components/form/steps";
import { addClient } from "@/services/client.service";
import FormContainer from "@/components/form/container/FormContainer";

const NewClientForm = () => {
  const router = useRouter();
  const { handleAlert } = useAlert();
  const methods = useForm({
    resolver: yupResolver(clientSchema),
    shouldUnregister: false,
    defaultValues: defaultClientInputData,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = methods;

  const onSubmit: SubmitHandler<IClientInputData> = async (data) => {
    try {
      const newClient = await addClient(data);
      reset();
      handleAlert(
        "success",
        `Dodano nowego klienta: ${
          newClient.data.firstName + " " + newClient.data.surname
        } `
      );
      router.push("/dashboard/clients");
    } catch (e) {
      const { alertMessage } = handleApiErrors(e);
      handleAlert(
        "error",
        `Dodawanie nowego klienta nie powiodło się. ${alertMessage}`
      );
    }
  };

  return (
    <FormContainer
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      buttonText="Dodaj klienta"
      buttonVariant={isSubmitting || !isValid ? "disabled" : "primary"}
    >
      <Step.BasicInfo />
      <Step.Aims />
      <Step.Diseases />
    </FormContainer>
  );
};

export default NewClientForm;
