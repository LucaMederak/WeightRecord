import styled, { css } from "styled-components";

const ClientWrapper = styled.div(
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
    gap: 4.8rem;
    width: 100%;
    max-width: ${breakpoints.xl};
  `
);

export { ClientWrapper };
