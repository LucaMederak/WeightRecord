import styled, { css } from "styled-components";
import { IAutocompleteProps } from "./Autocomplete.interfaces";

const AutocompleteWrapper = styled.div<Pick<IAutocompleteProps, "fullWidth">>(
  ({ theme: { colors, typography }, fullWidth }) => css`
    display: flex;
    flex-direction: column;
    width: 40rem;
    position: relative;

    ${fullWidth &&
    css`
      width: 100%;
    `}
  `
);

const AutoCompleteInputWrapper = styled.div(
  ({ theme: { colors, typography } }) => css`
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

    input {
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

    input:focus {
      outline: 0.2rem solid ${colors.form.step.input.border.active};
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

export { AutocompleteWrapper, AutoCompleteInputWrapper };
