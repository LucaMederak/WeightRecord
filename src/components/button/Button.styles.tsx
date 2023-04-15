import styled, { css } from "styled-components";
import { IButtonProps } from "./Button";

const Button = styled.button<Pick<IButtonProps, "size" | "variant">>(
  ({
    theme: {
      colors,
      typography,
      borderRadius,
      media: { up, breakpoints },
    },
    size,
    variant,
  }) => css`
    transition: 0.3s ease;
    border: none;
    border-radius: 0.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    //size
    ${size === "small" &&
    css`
      padding: 1.2rem 1.6rem;
      border-radius: 0.4rem;
      min-height: 3.2rem;
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.small.fontWeight.medium};
    `}

    ${size === "base" &&
    css`
      padding: 1.6rem 2.4rem;
      min-height: 4rem;
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
    `}

    ${size === "large" &&
    css`
      padding: 1.6rem 3.2rem;
      min-height: 4.8rem;
      font-size: ${typography.large.fontSize};
      font-weight: ${typography.large.fontWeight.medium};
    `}
    //variant
    ${variant === "primary" &&
    css`
      background: ${colors.button.primary.default.background};
      color: ${colors.button.primary.default.text};
      :hover {
        background: ${colors.button.primary.hover.background};
      }
    `}
    ${variant === "secondary" &&
    css`
      background: ${colors.button.secondary.default.background};
      color: ${colors.button.secondary.default.text};
      :hover {
        color: ${colors.button.secondary.hover.text};
        background: ${colors.button.secondary.hover.background};
      }
    `}
    ${variant === "disabled" &&
    css`
      background: ${colors.button.disabled.background};
      color: ${colors.button.disabled.text};
      cursor: auto;
    `}
  `
);

export { Button };
