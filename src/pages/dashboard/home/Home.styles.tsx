import styled, { css } from "styled-components";

const ListWrapper = styled.div(
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

    ${up(breakpoints.md)} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `
);

const ItemWrapper = styled.button(
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
    flex-direction: column;
    gap: 2rem;
    flex-grow: 1;
    padding: 4rem;
    background: ${colors.neutral[0]};
    border-radius: 0.8rem;
    border: 0.2rem dashed ${colors.border.contrast};
    cursor: pointer;
    transition: 0.3s ease-out;
    width: 100%;

    :hover {
      opacity: 0.7;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      path {
        fill: ${colors.primary[500]};
      }
    }

    color: ${colors.text.heading};
    font-size: ${typography.heading6.fontSize};
    font-weight: ${typography.heading6.fontWeight.medium};
  `
);

export { ListWrapper, ItemWrapper };
