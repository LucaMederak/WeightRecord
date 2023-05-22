import styled, { css } from "styled-components";

const DeleteClientWrapper = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: flxe-start;
    flex-direction: column;
    width: 100%;
    gap: 2rem;

    h2 {
      font-size: ${typography.heading4.fontSize};
      font-weight: ${typography.heading4.fontWeight.medium};
      color: ${colors.text.heading};
      text-align: center;
    }

    button {
      width: 100%;
    }
  `
);

export { DeleteClientWrapper };
