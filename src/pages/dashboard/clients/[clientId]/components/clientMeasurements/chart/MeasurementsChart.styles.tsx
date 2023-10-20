import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const MeasurementCustomTooltip = styled.div(
  ({ theme: { colors, typography, shadows } }) => css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: ${colors.background.main};
    border-radius: 0.8rem;
    border: 0.1rem solid ${colors.border.contrast};
    box-shadow: ${shadows.default};

    h2 {
      font-size: ${typography.large.fontSize};
      font-weight: ${typography.large.fontWeight.medium};
      color: ${colors.text.heading};
    }

    p {
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.text.heading};
    }
  `
);

const MeasurementContainer = styled.div(
  ({ theme: { colors } }) => css`
    width: 100%;
    position: relative;
    min-height: 20rem;
    overflow-y: hidden;
    background: ${colors.neutral[0]};
    border-radius: 0.8rem;
    padding: 3.2rem;
    border: 0.1rem solid ${colors.border.contrast};
  `
);

const LoadingWrapper = styled(motion.div)(
  ({ theme: {} }) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    flex: 1;
    width: 100%;
    transition: 0.3s ease-out;
  `
);

const MeasurementReportWrapper = styled(motion.div)(
  ({ theme: {} }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    flex-direction: column;
    width: 100%;
  `
);

const MeasurementEmptyReportWrapper = styled(motion.div)(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    border: 0.1rem dashed ${colors.border.contrast};
    border-radius: 0.4rem;
    padding: 2rem;

    h2 {
      font-size: ${typography.heading6.fontSize};
      font-weight: ${typography.heading6.fontWeight.medium};
      color: ${colors.text.heading};
    }

    p {
      font-size: ${typography.large.fontSize};
      font-weight: ${typography.large.fontWeight.medium};
      color: ${colors.text.heading};
    }
  `
);

const MeasurementReportNavWrapper = styled.div(
  ({
    theme: {
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    ${up(breakpoints.xs)} {
      flex-direction: row;
      align-items: center;
    }
  `
);

const MeasurementNavButtonsWrapper = styled.div(
  ({ theme: {} }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  `
);

interface IActive {
  active: boolean;
}

const MeasurementSelectWrapper = styled.div<IActive>(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
    active,
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    width: 100%;

    button {
      width: 100%;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      border: none;
      border: 0.1rem solid ${colors.background.contrast};
      border-radius: 0.4rem;
      cursor: pointer;
    }

    svg {
      width: 2rem;
      height: 2rem;
      transition: 0.3s ease-out;
      path {
        fill: ${colors.neutral[500]};
      }
    }

    p {
      font-size: ${typography.large.fontSize};
      font-weight: ${typography.large.fontWeight.medium};
      color: ${colors.text.heading};
    }

    ${active &&
    css`
      button {
        pointer-events: none;
      }
      p {
        color: ${colors.primary[500]};
      }
      svg {
        transform: rotate(180deg);
        path {
          fill: ${colors.primary[500]};
        }
      }
    `}

    ${up(breakpoints.xs)} {
      width: auto;
    }
  `
);

const MeasurementSelectPopupWrapper = styled(motion.ul)(
  ({ theme: { colors, shadows } }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 2rem;
    background: ${colors.background.main};
    border-radius: 0.4rem;
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    min-height: 15rem;
    border: 0.1rem solid ${colors.border.grey};
    list-style: none;
    z-index: 1;
    box-shadow: ${shadows.default};
  `
);

const MeasurementSelectPopupItem = styled.li(
  ({ theme: { colors, typography } }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1.6rem;
    width: 100%;
    cursor: pointer;
    transition: 0.2s ease-out;

    :not(:last-child) {
      border-bottom: 0.1rem solid ${colors.border.grey};
    }

    :hover {
      background: ${colors.neutral[20]};
    }

    color: ${colors.text.heading};
    font-size: ${typography.large.fontSize};
    font-weight: ${typography.small.fontWeight.regular};
  `
);

const MeasurementReportValuesWrapper = styled.div(
  ({
    theme: {
      colors,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 1rem;
    background: ${colors.background.contrast};
    border: 0.1rem dashed ${colors.border.grey};
    border-radius: 0.4rem;
    flex-direction: column;
    padding: 1rem;

    ${up(breakpoints.sm)} {
      align-items: center;
      flex-direction: row;
    }
  `
);

const MeasurementReportDatesWrapper = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    gap: 1rem;

    p {
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.text.heading};
    }

    ${up(breakpoints.sm)} {
      p {
        font-size: ${typography.large.fontSize};
      }
    }
  `
);

const MeasurementReportValueWrapper = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    span {
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.primary[500]};
    }

    ${up(breakpoints.sm)} {
      span {
        font-size: ${typography.large.fontSize};
      }
    }
  `
);

const MeasurementReportItem = styled.div(
  ({
    theme: {
      colors,
      typography,
      media: { breakpoints, up },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    flex-direction: column;

    ${up(breakpoints.sm)} {
      flex-direction: row;
      align-items: center;
    }

    h2 {
      font-size: ${typography.heading6.fontSize};
      font-weight: ${typography.heading6.fontWeight.medium};
      color: ${colors.text.heading};
    }

    p {
      font-size: ${typography.large.fontSize};
      font-weight: ${typography.large.fontWeight.medium};
      color: ${colors.text.heading};
    }
  `
);

export {
  MeasurementContainer,
  LoadingWrapper,
  MeasurementReportWrapper,
  MeasurementEmptyReportWrapper,
  MeasurementReportNavWrapper,
  MeasurementNavButtonsWrapper,
  MeasurementSelectWrapper,
  MeasurementSelectPopupWrapper,
  MeasurementSelectPopupItem,
  MeasurementReportValuesWrapper,
  MeasurementReportDatesWrapper,
  MeasurementReportValueWrapper,
  MeasurementReportItem,
  MeasurementCustomTooltip,
};
