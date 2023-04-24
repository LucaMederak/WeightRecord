import styled, { css } from "styled-components";

const AuthOptionWrapper = styled.div(
  ({
    theme: {
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;

    button {
      width: 100%;
    }
  `
);

interface IBackground {
  background?: boolean;
}

const PersonWrapper = styled.div<IBackground>(
  ({
    theme: {
      colors,
      media: { down, breakpoints },
    },

    background,
  }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
      border-radius: 0.4rem;

      ${background &&
      css`
        border: 0.2rem dashed ${colors.neutral[30]};
        background: ${colors.background.main};
      `}
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.2rem;
      border: 0.1rem solid ${colors.border.grey};
      border-radius: 0.4rem;

      svg {
        width: 1.6rem;
        height: 1.6rem;
        path {
          fill: ${colors.neutral[50]};
        }
      }
    }
  `
);

const PersonInfoWrapper = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;

    h2 {
      font-size: ${typography.large.fontSize};
      font-weight: ${typography.large.fontWeight.medium};
      color: ${colors.neutral[500]};
    }

    p {
      font-size: ${typography.small.fontSize};
      font-weight: ${typography.small.fontWeight.medium};
      color: ${colors.neutral[300]};
    }
  `
);

const ListWrapper = styled.ul(
  ({
    theme: {
      colors,
      typography,
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    list-style: none;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: 1rem;
      border-radius: 0.4rem;
      transition: 0.3s ease-out;
      cursor: pointer;

      :hover {
        background: ${colors.neutral[30]};
      }

      a {
        font-size: ${typography.base.fontSize};
        font-weight: ${typography.base.fontWeight.medium};
        color: ${colors.text.heading};
        text-decoration: none;
        width: 100%;
      }
    }
  `
);

const SignoutButton = styled.button(
  ({
    theme: {
      colors,
      typography,
      media: { down, breakpoints },
    },
  }) => css`
    width: 100%;
    padding: 1rem;
    border-radius: 0.8rem;
    background: ${colors.neutral[0]};
    color: ${colors.primary[500]};
    border: 0.1rem solid ${colors.border.grey};
    margin: 1rem 0;
    cursor: pointer;
    font-size: ${typography.base.fontSize};
    font-weight: ${typography.base.fontWeight.medium};
    color: white;
    transition: 0.3s ease-out;

    :hover {
      opacity: 0.8;
    }
  `
);

export {
  AuthOptionWrapper,
  PersonWrapper,
  PersonInfoWrapper,
  ListWrapper,
  SignoutButton,
};
