import styled, { css } from "styled-components";
import Link from "next/link";

const ReturnLinkWrapper = styled(Link)(
  ({
    theme: {
      colors,
      typography,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    transition: 0.3s ease-out;

    span {
      transition: 0.3s ease-out;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 1.2rem;
        height: 1.2rem;
        path {
          fill: ${colors.form.link.default};
        }
      }
    }

    color: ${colors.form.link.default};
    font-size: ${typography.large.fontSize};
    font-weight: ${typography.large.fontWeight.medium};

    :hover {
      color: ${colors.form.link.active};
      span {
        transform: translateX(-0.2rem);
        svg {
          path {
            fill: ${colors.form.link.active};
          }
        }
      }
    }
  `
);

export { ReturnLinkWrapper };
