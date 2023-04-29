import styled, { css } from "styled-components";
import Link from "next/link";

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

export { HeadingWrapper, ReturnLinkWrapper };
