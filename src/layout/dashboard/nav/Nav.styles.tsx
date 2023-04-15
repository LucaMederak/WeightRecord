import styled, { css } from "styled-components";

const NavWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
  }) => css`
    display: none;

    ${up(breakpoints.md)} {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      min-height: 8rem;
      background: ${colors.background.main};
      border-bottom: 0.1rem solid ${colors.border.grey};
      position: sticky;
      top: 0;
      left: 0;
      padding: 0.8rem 3.2rem;
      z-index: 2;
    }
  `
);

const NavOptionsWrapper = styled.div(
  ({
    theme: {
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1.6rem;
  `
);

export { NavWrapper, NavOptionsWrapper };
