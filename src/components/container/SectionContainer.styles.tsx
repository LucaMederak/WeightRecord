import styled, { css } from "styled-components";
import { ISectionContainerProps } from "./SectionContainer";

const SectionContainer = styled.section<
  Pick<ISectionContainerProps, "variant" | "borderTopDisplay" | "fillToScreen">
>(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
    variant,
    borderTopDisplay,
    fillToScreen,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${colors.navigation.main};
    padding: 6.4rem 2rem;
    position: relative;
    min-height: 100vh;

    ${borderTopDisplay &&
    css`
      border-top: 0.1rem solid ${colors.border.grey};
    `}

    ${variant === "contrast" &&
    css`
      background: ${colors.dashboard.background};
      border-bottom: 0.1rem solid ${colors.border.contrast};
    `}

    ${variant === "dark" &&
    css`
      background: ${colors.background.dark};
      border-top: 0.1rem solid ${colors.border.contrast};
      border-bottom: 0.1rem solid ${colors.border.contrast};
    `}

    ${fillToScreen &&
    css`
      min-height: calc(100vh - 15rem);
    `}
  `
);

const SectionContentWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.2rem;
    max-width: ${breakpoints.xl};
    margin: auto;
    position: relative;
    width: 100%;
  `
);

export { SectionContainer, SectionContentWrapper };
