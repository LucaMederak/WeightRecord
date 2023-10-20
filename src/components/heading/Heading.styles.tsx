import styled, { css } from "styled-components";

const HeadingWrapper = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
    max-width: ${breakpoints.xl};

    h1 {
      color: ${colors.form.heading1};
      font-size: ${typography.heading3.fontSize};
      font-weight: ${typography.heading3.fontWeight.bold};
    }
  `
);

export { HeadingWrapper };
