import React, { useState } from "react";
import format from "date-fns/format";
import { pl } from "date-fns/locale";

//styles
import * as Styled from "./DatePicker.styles";

import { IDatePickerProps } from "./DatePicker.interfaces";
import { useController } from "react-hook-form";

//components
import DatePickerPopup from "./datePickerPopup/DatePickerPopup";
import { FaCalendarPlus } from "react-icons/fa";

const DatePicker = ({
  name,
  label,
  fullWidth = false,
  validDate,
}: IDatePickerProps) => {
  const [datePickerPopup, setDatePickerPopup] = useState(false);

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
    <Styled.DatePickerContainer fullWidth={fullWidth}>
      <Styled.DatePickerContentWrapper>
        <label htmlFor={name}>{label}</label>
        <Styled.DatePickerInputWrapper>
          <input
            {...inputProps}
            value={field.value ? dateFormat(field.value) : ""}
          />
          <button
            onClick={() => setDatePickerPopup(true)}
            type="button"
            name="openDatePickerPopup"
          >
            <FaCalendarPlus />
          </button>
        </Styled.DatePickerInputWrapper>

        {isTouched && error && <p>{error.message}</p>}
      </Styled.DatePickerContentWrapper>

      <DatePickerPopup
        open={datePickerPopup}
        close={() => setDatePickerPopup(false)}
        fullWidth={fullWidth}
        name={name}
        validDate={validDate}
      />
    </Styled.DatePickerContainer>
  );
};

export default DatePicker;
