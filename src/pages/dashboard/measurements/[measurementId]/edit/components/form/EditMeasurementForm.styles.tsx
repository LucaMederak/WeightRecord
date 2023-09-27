import styled, { css } from "styled-components";

const FormContainer = styled.form(
  ({
    theme: {
      colors,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 4rem;
    flex-direction: column;
    max-width: ${breakpoints.xl};
    position: relative;
    z-index: 1;
  `
);

const ButtonWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 3.2rem;
    max-width: ${breakpoints.xl};
    position: sticky;
    bottom: 2rem;
    left: 0;
    background: ${colors.background.main};
    border-radius: 0.8rem;
    border: 0.1rem solid ${colors.border.grey};
    z-index: 1;

    button {
      min-width: 30rem;
    }
  `
);

export { FormContainer, ButtonWrapper };
