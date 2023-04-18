import React from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/router";

//assets
import LogoDark from "@/assets/logo-dark.svg";

//styles
import * as Styled from "./Auth.styles";

//schema
import {
  IRegisterSchema,
  registerDefaultValues,
  registerSchema,
} from "./schema/registerSchema";

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

const RegisterPage = () => {
  const { alert, handleAlert } = useAlert();
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    shouldUnregister: false,
    defaultValues: registerDefaultValues,
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

  const onSubmit = async (data: IRegisterSchema) => {
    try {
      const registerData = await axiosInstance.post("/api/user", data, {
        withCredentials: true,
      });

      handleAlert("success", "Utworzono konto");
      reset();
      router.push("/auth/login");
    } catch (e) {
      console.log(e);
      handleAlert("error", "Wystąpił błąd podczas rejestracji");
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
