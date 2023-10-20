import styled, { css } from "styled-components";

const SectionWrapper = styled.div(
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

const HeadingWrapper = styled.div(
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

    h2 {
      color: ${colors.text.heading};
      font-size: ${typography.heading4.fontSize};
      font-weight: ${typography.heading4.fontWeight.bold};
    }

    ${up(breakpoints.xs)} {
      h2 {
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
    width: 100%;
    button {
      flex-grow: 1;
    }

    ${up(breakpoints.xs)} {
      width: auto;
    }

    ${up(breakpoints.sm)} {
      flex-direction: row;
    }
  `
);

const InfoWrapper = styled.div(
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
    background: ${colors.neutral[0]};
    border-radius: 0.8rem;
    padding: 3.2rem;
    border: 0.1rem solid ${colors.border.contrast};
  `
);

const InfoItem = styled.div(
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
    gap: 1.2rem;

    span {
      color: ${colors.text.heading};
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.large.fontWeight.regular};
    }

    p {
      color: ${colors.text.heading};
      font-size: ${typography.large.fontSize};
      font-weight: ${typography.large.fontWeight.medium};
    }
  `
);

export {
  SectionWrapper,
  HeadingWrapper,
  ButtonsWrapper,
  InfoWrapper,
  InfoItem,
};
