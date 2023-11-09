import React from "react";
import { useRouter } from "next/router";
import { handleApiErrors } from "@/utils/apiErrorsHandler";

//form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//context
import { useAlert } from "@/context/Alert.context";

//schema
import { clientSchema, defaultClientInputData } from "@/schemas/client";
import { IClientInputData } from "@/interfaces/client.interfaces";

//styles
import * as Styled from "./NewClientForm.styles";

//components
import Button from "@/components/button/Button";
import ReactLoading from "react-loading";

//steps
import * as Step from "../steps";
import { addClient } from "@/services/client.service";

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
    <FormProvider {...methods}>
      <Styled.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Step.BasicInfo />
        <Step.Aims />
        <Step.Diseases />
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
              "Dodaj klienta"
            )}
          </Button>
        </Styled.ButtonWrapper>
      </Styled.FormContainer>
    </FormProvider>
  );
};

export default NewClientForm;
