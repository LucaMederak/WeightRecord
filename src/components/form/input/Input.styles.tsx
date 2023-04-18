import styled, { css } from "styled-components";
import { IInputProps } from "./Input.interfaces";

const InputWrapper = styled.div<Pick<IInputProps, "fullWidth">>(
  ({ theme: { colors, typography }, fullWidth }) => css`
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-out;
    width: 100%;
    gap: 0.8rem;

    label {
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.form.step.input.label};
      letter-spacing: 0.03rem;
    }

    input,
    textarea {
      padding: 0.8rem 1.2rem;
      border-radius: 0.8rem;
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.regular};
      color: ${colors.form.step.input.text};
      border: none;
      outline: 0.2rem solid ${colors.form.step.input.border.default};
      letter-spacing: 0.03rem;
      background: transparent;
      transition: 0.1s ease-out;
      min-height: 4.4rem;
    }

    textarea:focus,
    input:focus {
      outline: 0.2rem solid ${colors.form.step.input.border.active};
      /* border: 0.2rem solid ${colors.primary[300]}; */
    }

    textarea {
      resize: none;
      height: 10rem;
    }

    p {
      font-size: ${typography.small.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.form.step.input.error};
      margin-top: 0.5rem;
      letter-spacing: 0.03rem;
    }
  `
);

export { InputWrapper };
