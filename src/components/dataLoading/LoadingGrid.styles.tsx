import styled, { css } from "styled-components";

const LoadingWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    background: ${colors.background.main};
    padding: 2rem;
    border-radius: 0.8rem;
    width: 100%;
    max-width: ${breakpoints.xl};
  `
);

const LoadingRow = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;
  min-height: 7rem;
  transition: 0.3s ease-out;
  gap: 2rem;
`;

const LoadingRowItem = styled.div(
  ({
    theme: {
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    flex: 1;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;

    span {
      height: 3.5rem;
      width: 100%;
    }

    ${down(breakpoints.lg)} {
      &:not(:first-child) {
        display: none;
      }
    }
  `
);

export { LoadingWrapper, LoadingRow, LoadingRowItem };