import styled, { css } from "styled-components";

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

export { InfoWrapper, InfoItem };
