import styled, { css } from "styled-components";

const FormHeadingWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    h1 {
      color: ${colors.form.heading1};
      font-size: ${typography.heading3.fontSize};
      font-weight: ${typography.heading3.fontWeight.bold};
    }
  `
);

const LoginWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `
);

const LoginFormWrapper = styled.form(
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
    width: 100%;
    gap: 2rem;
    background: ${colors.background.main};
    border: 0.1rem solid ${colors.border.grey};
    padding: 3.2rem;
    border-radius: 0.8rem;

    button,
    input,
    div {
      width: 100%;
    }

    ${up(breakpoints.md)} {
      width: 50rem;
    }
  `
);

const FormLinkWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
      typography,
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.8rem;

    span {
      color: ${colors.text.description};
      font-size: ${typography.large.fontSize};
      font-weight: ${typography.large.fontWeight.regular};
    }

    a {
      color: ${colors.primary[500]};
      font-size: ${typography.large.fontSize};
      font-weight: ${typography.large.fontWeight.semibold};
    }
  `
);

export { LoginWrapper, LoginFormWrapper, FormHeadingWrapper, FormLinkWrapper };
