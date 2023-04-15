import styled, { css } from "styled-components";
import { IAlertProps } from "./Alert";
import { motion } from "framer-motion";

const AlertWrapper = styled(motion.div)<Pick<IAlertProps, "type">>(
  ({
    theme: {
      colors,
      typography,
      borderRadius,
      media: { up, breakpoints },
    },
    type,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
    border-radius: 0.8rem;
    right: 0;
    top: 12rem;
    position: fixed;
    gap: 1.2rem;
    z-index: 10;

    p {
      font-size: ${typography.heading6.fontSize};
      font-weight: ${typography.heading6.fontWeight.medium};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    ${type === "success" &&
    css`
      background: ${colors.success[50]};
      border: 0.2rem solid ${colors.success[100]};
      svg {
        path {
          fill: ${colors.success[500]};
        }
      }

      p {
        color: ${colors.success[600]};
      }
    `}

    ${type === "warning" &&
    css`
      background: ${colors.warning[50]};
      border: 0.2rem solid ${colors.warning[100]};
      svg {
        path {
          fill: ${colors.warning[500]};
        }
      }

      p {
        color: ${colors.warning[600]};
      }
    `}

    ${type === "error" &&
    css`
      background: ${colors.danger[50]};
      border: 0.2rem solid ${colors.danger[100]};
      svg {
        path {
          fill: ${colors.danger[500]};
        }
      }

      p {
        color: ${colors.danger[600]};
      }
    `}

   

    ${up(breakpoints.xs)} {
      top: 12rem;
      right: 2rem;
    }
  `
);

export { AlertWrapper };
