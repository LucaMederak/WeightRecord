import styled, { css } from "styled-components";

const StepWrapper = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;
    background: ${colors.background.main};
    padding: 3.2rem;
    border-radius: 0.8rem;
    border: 0.1rem solid ${colors.border.grey};
    position: relative;

    ${up(breakpoints.xl)} {
      gap: 12rem;
      flex-direction: row;
    }
  `
);

const StepHeadingWrapper = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.8rem;
    flex-direction: column;
    width: 100%;

    h3 {
      color: ${colors.form.step.heading};
      font-size: ${typography.heading5.fontSize};
      font-weight: ${typography.heading5.fontWeight.semibold};
    }

    p {
      color: ${colors.form.step.description};
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.regular};
    }

    ${up(breakpoints.xl)} {
      width: 40rem;
      /* position: sticky;
      top: 14rem;
      left: 0; */
    }
  `
);

const RequiredInfo = styled.span(
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
    padding: 0.6rem 1.2rem;
    border-radius: 0.6rem;
    background: ${colors.form.step.requiredInfo.background};
    color: ${colors.form.step.requiredInfo.text};
    border: 0.1rem solid ${colors.form.step.requiredInfo.border};
    font-size: ${typography.XSmall.fontSize};
    font-weight: ${typography.base.fontWeight.medium};
  `
);

const StepContentWrapper = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;

    ${up(breakpoints.xl)} {
      gap: 3.2rem;
      width: 60%;
    }
  `
);

export { StepWrapper, StepHeadingWrapper, StepContentWrapper, RequiredInfo };
