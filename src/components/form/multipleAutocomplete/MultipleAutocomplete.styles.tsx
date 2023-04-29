import styled, { css } from "styled-components";
import { IAutocompleteProps } from "./MultipleAutocomplete.interfaces";

const AutocompleteWrapper = styled.div<Pick<IAutocompleteProps, "fullWidth">>(
  ({ fullWidth }) => css`
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

    p {
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.danger[500]};
      margin-top: 0.5rem;
      letter-spacing: 0.03rem;
    }
  `
);

const MultipleAutoCompleteContentWrapper = styled.div(
  ({ theme: { colors, typography } }) => css`
    display: flex;
    gap: 0.8rem;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.8rem 1.2rem;
    border-radius: 0.8rem;
    font-size: ${typography.base.fontSize};
    font-weight: ${typography.base.fontWeight.regular};
    color: ${colors.form.step.input.text};
    border: 0.1rem solid ${colors.border.grey};
    letter-spacing: 0.03rem;
    background: transparent;
    transition: 0.2s ease;
    min-height: 4.4rem;

    input {
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.regular};
      color: ${colors.form.step.input.text};
      background: transparent;
      border: none;
      flex-grow: 1;

      ::placeholder {
        font-size: ${typography.base.fontSize};
        font-weight: ${typography.base.fontWeight.regular};
        color: ${colors.neutral[30]};
      }

      :focus ~ div {
        border: 0.2rem solid ${colors.form.step.input.border.active};
      }
    }
    border: 0.2rem solid ${colors.form.step.input.border.default};
  `
);

const SelectedItem = styled.div(
  ({ theme: { colors, typography } }) => css`
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    padding: 0.7rem 1.5rem;
    border-radius: 0.8rem;
    font-size: ${typography.small.fontSize};
    font-weight: ${typography.small.fontWeight.medium};
    border: 0.1rem solid ${colors.border.grey};
    letter-spacing: 0.03rem;
    background: ${colors.primary[50]};
    transition: 0.1s ease-out;

    span {
      font-size: ${typography.small.fontSize};
      font-weight: ${typography.small.fontWeight.medium};
      color: ${colors.neutral[400]};
      letter-spacing: 0.03rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: none;
      background: transparent;
      transition: 0.3s ease-out;

      :hover {
        opacity: 0.7;
      }
      cursor: pointer;
      svg {
        width: 100%;
        height: 100%;
        path {
          fill: ${colors.primary[500]};
        }
      }
    }
  `
);

export {
  AutocompleteWrapper,
  AutoCompleteInputWrapper,
  MultipleAutoCompleteContentWrapper,
  SelectedItem,
};
