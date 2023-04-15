import { motion } from "framer-motion";
import Link from "next/link";
import styled, { css } from "styled-components";
import { DashboardView } from "../DashboardLayout";

const SidebarWrapper = styled.div(
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
    background: ${colors.sidebar.background};
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;

    ${up(breakpoints.md)} {
      width: 30rem;
      min-height: 100vh;
      position: fixed;
      z-index: 1;
    }
  `
);

const SidebarLogoWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1.6rem;
    color: ${colors.neutral[0]};
    min-height: 8rem;
    padding: 1.2rem 2rem;
    background: ${colors.sidebar.header.background};
    border-bottom: 0.1rem solid ${colors.sidebar.background};
  `
);

const SidebarLinksWrapper = styled.ul(
  ({
    theme: {
      colors,
      typography,
      media: { up, breakpoints },
    },
  }) => css`
    display: none;

    ${up(breakpoints.md)} {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      gap: 1.2rem;
      padding: 2rem 1.6rem;
    }
  `
);

const Burger = styled.button(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
    border: none;
    border-radius: 0.8rem;
    background: ${colors.sidebar.header.button.background};
    cursor: pointer;
    transition: 0.3s ease-out;

    svg {
      width: 1.6rem;
      height: 1.6rem;
      path {
        fill: ${colors.sidebar.header.button.icon};
      }
    }

    :hover {
      opacity: 0.7;
    }

    ${up(breakpoints.md)} {
      display: none;
    }
  `
);

const MobileNavWrapper = styled(motion.ul)(
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
    width: 100%;
    gap: 1.6rem;
    padding: 2rem;
    position: absolute;
    top: 100%;
    left: 0;
    background: ${colors.sidebar.background};
    z-index: 2;

    button {
      width: 100%;
    }

    ${up(breakpoints.md)} {
      display: none;
    }
  `
);

interface ILinkProps {
  active: boolean;
  view: DashboardView;
}

const LinkWrapper = styled(Link)<ILinkProps>(
  ({
    theme: {
      colors,
      typography,
      media: { up, breakpoints },
    },
    active,
    view,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1.6rem;
    width: 100%;
    transition: 0.3s ease;
    border-radius: 0.8rem;
    gap: 1.6rem;
    color: ${colors.sidebar.link.text.default};
    font-size: ${typography.large.fontSize};
    font-weight: ${typography.large.fontWeight.medium};
    border: 0.1rem solid ${colors.sidebar.link.borderColor.default};
    min-height: 5.4rem;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    :hover {
      background: ${colors.sidebar.link.background.active};
      color: ${colors.sidebar.link.text.active};
      border: 0.1rem solid ${colors.sidebar.link.borderColor.active};
    }

    ${active &&
    css`
      background: ${colors.sidebar.link.background.active};
      color: ${colors.sidebar.link.text.active};
      border: 0.1rem solid ${colors.sidebar.link.borderColor.active};
    `}

    ${view === "rolledUp" &&
    css`
      width: auto;
      /* span {
        visibility: hidden;
        position: absolute;
        left: 4rem;
      } */
    `}
  `
);

interface IIconButtonProps {
  view: DashboardView;
}

const IconButton = styled(motion.div)<IIconButtonProps>(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
    view,
  }) => css`
    display: none;

    ${up(breakpoints.md)} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.2rem;
      border: none;
      border-radius: 0.8rem;
      background: ${colors.sidebar.header.button.background};
      cursor: pointer;
      transition: 0.3s ease-out;

      svg {
        width: 1.6rem;
        height: 1.6rem;
        path {
          fill: ${colors.sidebar.header.button.icon};
        }
      }

      :hover {
        opacity: 0.7;
      }

      ${view === "rolledUp" &&
      css`
        display: none;
      `}
    }
  `
);

const RolledUpLogoWrapper = styled(motion.div)(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    position: relative;
    cursor: pointer;
    transition: 0.3s ease;
  `
);

const IconButtonRolled = styled(motion.div)<IIconButtonProps>(
  ({
    theme: {
      colors,
      media: { up, breakpoints },
    },
    view,
  }) => css`
    display: none;

    ${up(breakpoints.md)} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.2rem;
      border: none;
      border-radius: 0.8rem;
      background: ${colors.sidebar.header.button.background};
      cursor: pointer;
      transition: 0.3s ease-out;

      svg {
        width: 1.6rem;
        height: 1.6rem;
        path {
          fill: ${colors.sidebar.header.button.icon};
        }
      }

      :hover {
        opacity: 0.7;
      }

      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  `
);

export {
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLinksWrapper,
  MobileNavWrapper,
  LinkWrapper,
  Burger,
  IconButton,
  RolledUpLogoWrapper,
  IconButtonRolled,
};
