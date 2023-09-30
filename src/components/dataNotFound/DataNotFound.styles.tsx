import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const NotFoundWrapper = styled(motion.div)(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    padding: 4rem;
    border: 0.1rem solid #ff000025;
    border-radius: 0.8rem;
    border: 0.1rem solid ${colors.border.contrast};
    background: ${colors.background.main};
    min-height: 30rem;
    max-width: ${breakpoints.xl};

    svg {
      width: 2.4rem;
      height: 2.4rem;
      path {
        fill: ${colors.primary[500]};
      }
    }

    h3 {
      color: ${colors.text.heading};
      font-size: ${typography.heading6.fontSize};
      font-weight: ${typography.heading6.fontWeight.bold};
      text-align: center;
    }

    ${up(breakpoints.sm)} {
      flex-direction: row;
    }
  `
);

export { NotFoundWrapper };
