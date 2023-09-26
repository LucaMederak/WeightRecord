import styled, { css } from "styled-components";

const MeasurementWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: ${breakpoints.xl};
  `
);

const ButtonsWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.2rem;

    ${up(breakpoints.sm)} {
      flex-direction: row;
    }
  `
);

export { MeasurementWrapper, ButtonsWrapper };
