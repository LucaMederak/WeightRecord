import React from "react";
import { IInputProps } from "./Input.interfaces";
import { useController, useForm } from "react-hook-form";

import * as Styled from "./Input.styles";

const Input = ({
  name,
  placeholder,
  label,
  type = "text",
  disabled,
  onChange,
  fullWidth = false,
  controlled,
  textarea,
  step,
  customValue,
}: IInputProps) => {
  const {
    field,
    fieldState: { error, isTouched },
  } = useController({ name });

  const inputProps = {
    ...field,
    type,
    name,
    placeholder,
    disabled,
    step,
  };

  if (controlled && onChange) {
    (inputProps.value = field.value), (inputProps.onChange = onChange);
  }

  if (customValue) {
    inputProps.value = customValue;
  }

  return (
    <Styled.InputWrapper fullWidth={fullWidth}>
      <label htmlFor={name}>{label}</label>
      {textarea ? <textarea {...inputProps} /> : <input {...inputProps} />}
      {isTouched && error && <p>{error.message}</p>}
    </Styled.InputWrapper>
  );
};

export default Input;
