import React, { useState, useRef, useEffect } from "react";
import format from "date-fns/format";
import { pl } from "date-fns/locale";

//styles
import * as Styled from "./Calendar.styles";

import { ICalendarProps } from "./Calendar.interfaces";
import { useController, useForm, useFormContext } from "react-hook-form";

//components
import CalendarPopup from "./calendarPopup/CalendarPopup";
import { FaCalendarPlus } from "react-icons/fa";

const Calendar = ({
  name,
  label,
  fullWidth = false,
  validDate,
}: ICalendarProps) => {
  const [calendarPopup, setCalendarPopup] = useState(false);

  const {
    field,
    fieldState: { error, isTouched },
  } = useController({ name });

  const inputProps = {
    ...field,
    name,
  };

  const dateFormat = (date: string) => {
    const formatDate = format(new Date(date), "dd.MM.yyyy", {
      locale: pl,
    });

    return formatDate;
  };

  return (
    <Styled.CalendarContainer fullWidth={fullWidth}>
      <Styled.CalendarContentWrapper>
        <label htmlFor={name}>{label}</label>
        <Styled.CalendarInputWrapper>
          <input
            {...inputProps}
            value={field.value ? dateFormat(field.value) : ""}
          />
          <button onClick={() => setCalendarPopup(true)} type="button">
            <FaCalendarPlus />
          </button>
        </Styled.CalendarInputWrapper>

        {isTouched && error && <p>{error.message}</p>}
      </Styled.CalendarContentWrapper>

      <CalendarPopup
        open={calendarPopup}
        close={() => setCalendarPopup(false)}
        fullWidth={fullWidth}
        name={name}
        validDate={validDate}
      />
    </Styled.CalendarContainer>
  );
};

export default Calendar;
