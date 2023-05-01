import styled, { css } from "styled-components";

import { IDatePickerProps } from "../DatePicker.interfaces";

const DatePickerWrapper = styled.div<Pick<IDatePickerProps, "fullWidth">>(
  ({ theme: { colors, shadows, typography }, fullWidth }) => css`
    display: flex;
    flex-direction: column;
    width: 40rem;
    background: ${colors.background.main};
    box-shadow: ${shadows.default};
    padding: 2rem;
    border-radius: 0.8rem;
    position: absolute;
    top: 110%;
    left: 0;
    z-index: 1;
    border: 0.1rem solid ${colors.border.grey};
    ${fullWidth &&
    css`
      width: 100%;
    `};
  `
);

const DatePickerOptions = styled.div(
  ({ theme: { colors, typography } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 100%;

    h2 {
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.text.heading};
      flex-grow: 1;
    }
  `
);

const ChevronWrapper = styled.div(
  ({ theme: { colors, typography } }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: transparent;
      border: none;
      cursor: pointer;
      color: ${colors.text.heading};
      transition: 0.3s ease-out;

      :hover {
        background: ${colors.neutral[30]};
      }

      svg {
        width: 60%;
        height: 60%;
      }
    }
  `
);

const GridDatePickerInfo = styled.ul(
  ({ theme: { colors, typography } }) => css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.4rem;
      font-variant: small-caps;
      padding: 1rem 0.5rem;
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.text.heading};
    }
  `
);

const GridDatePicker = styled.div(
  () => css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
  `
);

interface ICurrentDay {
  currentDay: boolean;
  currentMonth: boolean;
  selectedDay: boolean;
  disabledDay?: any;
}

const DatePickerDay = styled.div<ICurrentDay>(
  ({
    theme: { colors, typography },
    currentDay,
    currentMonth,
    selectedDay,
    disabledDay,
  }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${typography.base.fontSize};
    font-weight: ${typography.base.fontWeight.medium};
    color: ${colors.text.heading};
    padding: 0.4rem;
    height: 4rem;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: 0.3s ease-out;

    :hover {
      background: ${colors.neutral[30]};
    }

    ${currentDay &&
    css`
      background: ${colors.neutral[30]};
    `}

    ${currentMonth &&
    css`
      color: ${colors.neutral[30]};
      pointer-events: none;
    `}

    ${selectedDay &&
    css`
      background: ${colors.primary[500]};
      color: white;
      :hover {
        background: ${colors.primary[500]};
      }
    `}


    ${disabledDay &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
  `
);

export {
  DatePickerWrapper,
  DatePickerOptions,
  ChevronWrapper,
  GridDatePickerInfo,
  GridDatePicker,
  DatePickerDay,
};
