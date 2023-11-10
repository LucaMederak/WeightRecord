import React from "react";
import { useRouter } from "next/router";
import { isAxiosError } from "axios";

//assets
import LogoDark from "@/assets/logo-dark.svg";

//styles
import * as Styled from "./Auth.styles";

//schema
import {
  registerUserSchema,
  defaultRegisterUserInputData,
} from "@/schemas/user/register.schema";
import { IRegisterUserInputData } from "@/interfaces/user.interfaces";

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
import { registerUser } from "@/services/user.service";
//utils
import { handleApiErrors } from "@/utils/apiErrorsHandler";

const RegisterPage = () => {
  const { alert, handleAlert } = useAlert();
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(registerUserSchema),
    shouldUnregister: false,
    defaultValues: defaultRegisterUserInputData,
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

  const onSubmit = async (data: IRegisterUserInputData) => {
    try {
      const newUser = await registerUser(data);
      handleAlert(
        "success",
        `Utworzono konto dla ${
          newUser.data.name + " " + newUser.data.lastName
        }. Zaloguj się aby przejść do panelu`
      );
      reset();
      router.push("/auth/login");
    } catch (e) {
      if (isAxiosError(e) && e.response?.status === 409) {
        handleAlert(
          "error",
          `Wystąpił błąd podczas rejestracji użytkownika. Istnieje już użytkownik z takim adresem email`
        );
      } else {
        const { alertMessage } = handleApiErrors(e);
        handleAlert(
          "error",
          `Wystąpił błąd podczas rejestracji użytkownika. ${alertMessage}`
        );
      }
    }
  };

  return (
    <SectionContainer variant="contrast">
      <Image src={LogoDark} alt="WeightRecord logo" width={200} height={40} />

      <FormProvider {...methods}>
        <Styled.LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input label="Imię" name="name" type="text" placeholder="Imię *" />
          <Input
            label="Nazwisko"
            name="lastName"
            type="text"
            placeholder="Nazwisko *"
          />
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
              "Załóż konto"
            )}
          </Button>
        </Styled.LoginFormWrapper>
      </FormProvider>
      <Styled.FormLinkWrapper>
        <p>Masz już konto?</p>
        <Link href={`/auth/login`}>Zaloguj się</Link>
      </Styled.FormLinkWrapper>
    </SectionContainer>
  );
};

export default RegisterPage;
