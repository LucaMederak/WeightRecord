import Button, { IButtonProps } from "@/components/button/Button";
import React, { ReactNode } from "react";
import { FieldValues, FormProvider } from "react-hook-form";
import { UseFormReturn } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import ReactLoading from "react-loading";

//styles
import * as Styled from "./FormContainer.styles";

interface IFormContainerProps {
  methods: UseFormReturn<any, any>;
  onSubmit: SubmitHandler<any>;
  isSubmitting: boolean;
  children: React.ReactNode;
  buttonText: string;
  buttonVariant: IButtonProps["variant"];
}

const FormContainer = ({
  methods,
  onSubmit,
  isSubmitting,
  children,
  buttonText,
  buttonVariant,
}: IFormContainerProps) => {
  return (
    <FormProvider {...methods}>
      <Styled.FormContainer onSubmit={onSubmit}>
        {children}
        <Styled.ButtonWrapper>
          <Button size={"large"} variant={buttonVariant} type="submit">
            {isSubmitting ? (
              <ReactLoading
                type={"spin"}
                color={"white"}
                height={20}
                width={20}
              />
            ) : (
              <>{buttonText}</>
            )}
          </Button>
        </Styled.ButtonWrapper>
      </Styled.FormContainer>
    </FormProvider>
  );
};

export default FormContainer;
