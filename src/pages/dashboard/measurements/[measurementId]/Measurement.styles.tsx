import styled, { css } from "styled-components";

const MeasurementWrapper = styled.div(
  ({
    theme: {
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 4.8rem;
    width: 100%;
    max-width: ${breakpoints.xl};
  `
);

export { MeasurementWrapper };
