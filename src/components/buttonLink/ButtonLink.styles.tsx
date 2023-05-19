import styled, { css } from "styled-components";
import { IButtonLinkProps } from "./ButtonLink";
import Link from "next/link";

const ButtonLink = styled(Link)<Pick<IButtonLinkProps, "variant" | "linkSize">>(
  ({
    theme: {
      colors,
      typography,
      borderRadius,
      media: { up, breakpoints },
    },
    linkSize,
    variant,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    transition: 0.3s ease;
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;

    //size
    ${linkSize === "small" &&
    css`
      padding: 0.8rem 1.6rem;
      min-height: 3.2rem;
      font-size: ${typography.small.fontSize};
      font-weight: ${typography.small.fontWeight.medium};
    `}

    ${linkSize === "base" &&
    css`
      padding: 1.4rem 2.4rem;
      min-height: 4rem;
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
    `}

    ${linkSize === "large" &&
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
    ${variant === "disabled" &&
    css`
      background: ${colors.button.disabled.background};
      color: ${colors.button.disabled.text};
      cursor: auto;
    `}
  `
);

export { ButtonLink };
