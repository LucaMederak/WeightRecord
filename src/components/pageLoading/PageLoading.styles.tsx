import styled, { css } from "styled-components";

const PageLoadingContainer = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: ${colors.neutral[0]};
    transition: 0.3s ease-out;
  `
);

export { PageLoadingContainer };
