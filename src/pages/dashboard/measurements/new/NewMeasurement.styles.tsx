import styled, { css } from "styled-components";

const ClientsNotFoundWrapper = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 4rem;
    border-radius: 0.8rem;
    border: 0.1rem solid ${colors.border.contrast};
    background: ${colors.background.main};
    min-height: 40rem;
    max-width: ${breakpoints.xl};

    h2 {
      font-size: ${typography.heading4.fontSize};
      font-weight: ${typography.heading4.fontWeight.bold};
      color: ${colors.text.heading};
      text-align: center;
    }

    p {
      font-size: ${typography.heading6.fontSize};
      font-weight: ${typography.heading6.fontWeight.regular};
      color: ${colors.text.heading};
      text-align: center;
    }

    button {
      width: 100%;
    }
  `
);

export { ClientsNotFoundWrapper };
