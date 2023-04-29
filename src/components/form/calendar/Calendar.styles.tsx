import styled, { css } from "styled-components";
import { ICalendarProps } from "./Calendar.interfaces";

const CalendarContainer = styled.div<Pick<ICalendarProps, "fullWidth">>(
  ({ fullWidth }) => css`
    display: flex;
    flex-direction: column;
    width: 40rem;
    position: relative;

    ${fullWidth &&
    css`
      width: 100%;
    `}
  `
);

const CalendarContentWrapper = styled.div(
  ({ theme: { colors, typography } }) => css`
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-out;
    width: 100%;
    gap: 0.8rem;

    label {
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.form.step.input.label};
      letter-spacing: 0.03rem;
    }

    p {
      font-size: ${typography.small.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.form.step.input.error};
      margin-top: 0.5rem;
      letter-spacing: 0.03rem;
    }
  `
);

const CalendarInputWrapper = styled.div(
  ({ theme: { colors, typography } }) => css`
    display: flex;
    /* align-items: flex-start;
    justify-content: flex-start; */
    transition: 0.3s ease-out;
    width: 100%;

    input {
      padding: 0.8rem 1.2rem;
      border-radius: 0.8rem 0 0 0.8rem;
      font-size: ${typography.base.fontSize};
      font-weight: ${typography.base.fontWeight.medium};
      color: ${colors.form.step.input.text};
      border: 0.2rem solid ${colors.form.step.input.border.default};
      letter-spacing: 0.03rem;
      background: transparent;
      transition: 0.1s ease-out;
      min-height: 4.4rem;
      pointer-events: none;
    }

    input:focus {
      border: 0.2rem solid ${colors.form.step.input.border.active};
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.4rem;
      min-height: 4.4rem;
      border: 0.2rem solid ${colors.form.step.input.border.default};
      border-left: none;
      background: transparent;
      cursor: pointer;
      border-radius: 0 0.8rem 0.8rem 0;

      svg {
        width: 1.6rem;
        height: 1.6rem;
        color: ${colors.neutral[300]};
      }
    }
  `
);

export { CalendarContainer, CalendarContentWrapper, CalendarInputWrapper };
