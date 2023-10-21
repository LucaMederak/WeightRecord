import styled, { css } from "styled-components";

const HeadingContainer = styled.div(
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
  `
);

const HeadingWithActionWrapper = styled.div(
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

    a {
      width: 100%;
    }

    h1 {
      color: ${colors.text.heading};
      font-size: ${typography.heading4.fontSize};
      font-weight: ${typography.heading4.fontWeight.bold};
    }

    ${up(breakpoints.xs)} {
      h1 {
        font-size: ${typography.heading3.fontSize};
        font-weight: ${typography.heading3.fontWeight.bold};
      }

      a {
        width: auto;
      }
    }

    ${up(breakpoints.sm)} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `
);

export { HeadingContainer, HeadingWithActionWrapper };
