import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ModalContainer = styled(motion.div)(
  ({
    theme: {
      colors,
      media: { breakpoints, up },
    },
  }) => css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${colors.background.backdrop};
    z-index: 30;
    padding: 0 2rem;
    backdrop-filter: blur(0.2rem);
    overflow-y: auto;
  `
);

interface IModalContentWidth {
  modalWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

const ModalContentWrapper = styled.div<IModalContentWidth>(
  ({
    theme: {
      shadows,
      colors,
      media: { breakpoints, up },
    },
    modalWidth,
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    max-width: ${breakpoints.lg};
    background: ${colors.background.main};
    border-radius: 0.8rem;
    padding: 3.2rem;
    z-index: 40;
    position: relative;
    margin: 2rem 0;
    box-shadow: ${shadows.backdrop};
    gap: 4rem;

    ${modalWidth === "xs" &&
    css`
      max-width: ${breakpoints.xs};
    `}
    ${modalWidth === "sm" &&
    css`
      max-width: ${breakpoints.sm};
    `}
    ${modalWidth === "lg" &&
    css`
      max-width: ${breakpoints.lg};
    `}
    ${modalWidth === "xl" &&
    css`
      max-width: ${breakpoints.xl};
    `}

    width: 100%;

    ${up(breakpoints.md)} {
      padding: 5rem;
      margin: 10rem auto;
    }
  `
);

export { ModalContainer, ModalContentWrapper };
