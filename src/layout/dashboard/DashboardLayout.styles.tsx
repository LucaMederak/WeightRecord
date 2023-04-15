import styled, { css } from "styled-components";
import { DashboardView } from "./DashboardLayout";

const DashboardContainer = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: ${colors.background.main};

    ${up(breakpoints.md)} {
      flex-direction: row;
    }
  `
);

interface IView {
  view: DashboardView;
}

const DashboardContentContainer = styled.div<IView>(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
    view,
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: ${colors.dashboard.background};
    transition: 0.3s ease-out;
    z-index: 1;

    ${up(breakpoints.md)} {
      position: absolute;
      top: 0;
      right: 0;
      width: calc(100% - 30rem);
      margin-left: 30rem;
      border-left: 0.1rem solid ${colors.border.grey};

      ${view === "rolledUp" &&
      css`
        width: calc(100% - 8.4rem);
      `}
    }
  `
);

const DashboardContentWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 3.2rem 2rem;
    gap: 2rem;

    ${up(breakpoints.md)} {
      padding: 4rem;
      gap: 3.2rem;
    }

    ${up(breakpoints.xl)} {
      padding: 6rem;
    }
  `
);

export {
  DashboardContainer,
  DashboardContentContainer,
  DashboardContentWrapper,
};
