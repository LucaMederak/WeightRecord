import React from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import { isAxiosError } from "axios";

//assets
import LogoDark from "@/assets/logo-dark.svg";

//styles
import * as Styled from "./Auth.styles";

//schema
import {
  loginUserSchema,
  defaultLoginUserInputData,
} from "@/schemas/user/login.schema";
import { ILoginUserInputData } from "@/interfaces/user.interfaces";

//form
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//components
import Link from "next/link";
import ReactLoading from "react-loading";
import SectionContainer from "@/components/container/SectionContainer";
import Button from "@/components/button/Button";
import Input from "@/components/form/input/Input";
import Image from "next/image";

//context
import { useAlert } from "@/context/Alert.context";
//services
import { loginUser } from "@/services/user.service";
//utils
import { handleApiErrors } from "@/utils/apiErrorsHandler";

const LoginPage = () => {
  const { alert, handleAlert } = useAlert();
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(loginUserSchema),
    shouldUnregister: false,
    defaultValues: defaultLoginUserInputData,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid, isSubmitSuccessful },
    setValue,
    trigger,
    reset,
    setFocus,
    getValues,
    watch,
  } = methods;

  const onSubmit = async (data: ILoginUserInputData) => {
    try {
      const userSession = await loginUser(data);
      handleAlert("success", "Zalogowano");
      //redirect to dashboard
      mutate("/api/user");
      reset();
    } catch (e) {
      if (isAxiosError(e) && e.response?.status === 401) {
        handleAlert("error", `Nieprawidłowy adres email lub hasło`);
      } else {
        const { alertMessage } = handleApiErrors(e);
        handleAlert(
          "error",
          `Wystąpił błąd podczas logowania. ${alertMessage}`
        );
      }
    }
  };

  return (
    <SectionContainer variant="contrast">
      <Image src={LogoDark} alt="WeightRecord logo" width={200} height={40} />

      <FormProvider {...methods}>
        <Styled.LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Email *"
          />
          <Input
            label="Hasło"
            name="password"
            type="password"
            placeholder="Hasło *"
          />

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
              "Zaloguj się"
            )}
          </Button>
        </Styled.LoginFormWrapper>
      </FormProvider>

      <Styled.FormLinkWrapper>
        <p>Nie masz jeszcze konta?</p>
        <Link href={`/auth/register`}>Załóż konto</Link>
      </Styled.FormLinkWrapper>
    </SectionContainer>
  );
};

export default LoginPage;
