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
      /* flex-grow: 1; */
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

const DatePickerYearsWrapper = styled.div(
  ({ theme: { colors, typography } }) => css`
    width: 100%;
    background: ${colors.neutral[0]};
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    padding: 1rem;
    background: ${colors.neutral[0]};
    z-index: 1;
  `
);

const DatePickerYearItem = styled.button(
  ({ theme: { colors, typography } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 0.1rem solid ${colors.primary[50]};
    border-radius: 0.4rem;
    cursor: pointer;
    transition: 0.3s ease-out;
    background: ${colors.neutral[0]};

    :hover {
      background: ${colors.neutral[20]};
      color: ${colors.primary[500]};
    }

    font-size: ${typography.base.fontSize};
    color: ${colors.text.heading};
    font-weight: ${typography.base.fontWeight.medium};
  `
);

interface IActiveOption {
  active: boolean;
}

const DatePickerYearOption = styled.div<IActiveOption>(
  ({ theme: { colors, typography }, active }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
        background: ${colors.neutral[20]};
      }

      svg {
        transition: 0.3s ease-out;
        width: 60%;
        height: 60%;
      }
    }

    ${active &&
    css`
      button {
        svg {
          transform: rotate(180deg);
        }
      }
    `}
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

const DatePickerDay = styled.button<ICurrentDay>(
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
    background: ${colors.neutral[0]};
    border: none;

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
  DatePickerYearsWrapper,
  DatePickerYearItem,
  GridDatePickerInfo,
  GridDatePicker,
  DatePickerDay,
  DatePickerYearOption,
};
