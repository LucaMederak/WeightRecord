import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const IconModalContainer = styled.div(
  () => css`
    position: relative;
  `
);

interface IBackground {
  background?: boolean;
}

const IconModalWrapper = styled.div<IBackground>(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
    background,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: ${colors.neutral[30]};
    transition: 0.3s ease-out;
    cursor: pointer;
    z-index: 50;
    position: relative;

    ${background &&
    css`
      border: 0.2rem dashed ${colors.border.grey};
      background: white;
    `}

    svg {
      width: 1.6rem;
      height: 1.6rem;
      path {
        fill: ${colors.neutral[50]};
      }
    }

    :hover {
      opacity: 0.7;

      svg {
        path {
          fill: ${colors.primary[500]};
        }
      }
    }
  `
);

const ModalContentContainer = styled.div(
  ({
    theme: {
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    position: absolute;
    top: 100%;
    right: 0;
    gap: 1rem;
    background: transparent;
    padding: 2rem 0;
    z-index: 10;
  `
);

const ModalContentWrapper = styled(motion.div)(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: ${colors.background.main};
    padding: 3rem;
    border: 0.1rem solid ${colors.border.grey};
    border-radius: 0.8rem;
  `
);

export {
  IconModalContainer,
  IconModalWrapper,
  ModalContentContainer,
  ModalContentWrapper,
};
