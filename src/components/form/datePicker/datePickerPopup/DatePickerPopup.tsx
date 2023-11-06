import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./DatePickerPopup.styles";

import { useFormContext } from "react-hook-form";

//icons
import {
  FaCalendar,
  FaChevronRight,
  FaChevronLeft,
  FaChevronDown,
} from "react-icons/fa";

//date-fns
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import format from "date-fns/format";
import addMonths from "date-fns/addMonths";
import pl from "date-fns/locale/pl";

import {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfDay,
  addDays,
  isSameDay,
  isSameMonth,
  isAfter,
  eachYearOfInterval,
} from "date-fns";

const dateFormat = (date: Date) => {
  const formatDate = format(new Date(date), "Y");

  return formatDate;
};

interface IDatePickerPopupProps {
  open: boolean;
  close: () => void;
  fullWidth: boolean;
  name: string;
  validDate?: (day: Date) => void;
}

const DatePickerPopup = ({
  open,
  close,
  fullWidth,
  name,
  validDate,
}: IDatePickerPopupProps) => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
    getValues,
    trigger,
  } = useFormContext();
  const [openYearsBox, setOpenYearsBox] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!datePickerRef.current?.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const [selectedDay, setSelectedDay] = useState(new Date());

  useEffect(() => {
    if (selectedDay) {
      return close();
    }
  }, [selectedDay]);

  const currentDate = new Date();
  const startDate = addMonths(new Date(), 0);
  const date = startOfMonth(startDate);
  const startWeek = startOfWeek(date, { weekStartsOn: 1 });
  const endMonth = endOfMonth(date);
  const endWeek = endOfWeek(endMonth, { weekStartsOn: 1 });

  const [datePickerValues, setDatePickerValues] = useState({
    startDay: new Date(),
    endDay: new Date(),
    month: startDate,
    year: startDate,
    daysArray: eachDayOfInterval({
      start: startWeek,
      end: endWeek,
    }),
  });

  const [currentMonth, setCurrentMonth] = useState(0);

  const nextMonth = () => {
    const month = datePickerValues.month.getMonth() + 1;

    handleOwnCalendar(month);
  };

  const prevMonth = () => {
    const month = datePickerValues.month.getMonth() - 1;
    handleOwnCalendar(month);
  };

  const handleOwnCalendar = (month: number, year?: Date) => {
    setCurrentMonth(month);

    const startDate = year
      ? year
      : new Date(
          datePickerValues.year.getFullYear(),
          month,
          selectedDay.getDate()
        );

    // const startDate = addMonths(new Date(), month);
    const date = startOfMonth(startDate);
    const startWeek = startOfWeek(date, { weekStartsOn: 1 });
    const endMonth = endOfMonth(date);
    const endWeek = endOfWeek(endMonth, { weekStartsOn: 1 });

    const eachDaysInMonth = eachDayOfInterval({
      start: startWeek,
      end: endWeek,
    });

    setDatePickerValues({
      ...datePickerValues,
      startDay: startWeek,
      endDay: endWeek,
      month: date,
      year: date,
      daysArray: eachDaysInMonth,
    });
  };

  const handleChangeDay = (day: Date) => {
    const newDay = new Date(day);
    const newDayFormat = newDay.toJSON();

    console.log(newDayFormat);

    setSelectedDay(day);
    setValue(name, newDayFormat, { shouldDirty: true });
    trigger();
  };

  const dateValid = (day: Date) => {
    if (validDate) {
      return validDate(day);
    }

    return false;
  };

  const openYears = () => {
    setOpenYearsBox(!openYearsBox);
  };

  const changeYear = (year: Date) => {
    const month = currentMonth;
    const yearToChange = new Date(
      year.getFullYear(),
      datePickerValues.month.getMonth(),
      selectedDay.getDate()
    );

    handleOwnCalendar(month, yearToChange);
    setOpenYearsBox(false);
  };

  const calendarYears = eachYearOfInterval({
    start: new Date(currentDate.getFullYear() - 120, 11, 10),
    end: new Date(currentDate.getFullYear(), 11, 10),
  });

  if (!open) return null;

  return (
    <Styled.DatePickerWrapper ref={datePickerRef} fullWidth={fullWidth}>
      <Styled.DatePickerOptions>
        <Styled.DatePickerYearOption active={openYearsBox}>
          {datePickerValues.month && datePickerValues.year ? (
            <h2>
              {format(datePickerValues.month, "LLLL", { locale: pl })}{" "}
              {format(datePickerValues.year, "yyyy", { locale: pl })}
            </h2>
          ) : (
            <h2>-</h2>
          )}

          <button type="button" onClick={openYears} name="openYearsPopup">
            <FaChevronDown />
          </button>
        </Styled.DatePickerYearOption>

        <Styled.ChevronWrapper>
          <button type="button" onClick={prevMonth}>
            <FaChevronLeft />
          </button>

          <button type="button" onClick={nextMonth}>
            <FaChevronRight />
          </button>
        </Styled.ChevronWrapper>
      </Styled.DatePickerOptions>

      {openYearsBox && (
        <Styled.DatePickerYearsWrapper>
          {calendarYears.map((calendarYear, index) => (
            <Styled.DatePickerYearItem
              key={calendarYear.toString()}
              onClick={() => changeYear(calendarYear)}
              type="button"
            >
              <p>{dateFormat(calendarYear)}</p>{" "}
            </Styled.DatePickerYearItem>
          ))}
        </Styled.DatePickerYearsWrapper>
      )}

      <Styled.GridDatePickerInfo>
        <li>pon</li>
        <li>wt</li>
        <li>śr</li>
        <li>czw</li>
        <li>pt</li>
        <li>sob</li>
        <li>niedz</li>
      </Styled.GridDatePickerInfo>
      <Styled.GridDatePicker>
        {datePickerValues.daysArray.map((day, index) => (
          <Styled.DatePickerDay
            type="button"
            key={index}
            currentDay={isSameDay(day, new Date())}
            currentMonth={!isSameMonth(day, datePickerValues.month)}
            selectedDay={isSameDay(day, selectedDay)}
            onClick={() => handleChangeDay(day)}
            disabledDay={dateValid(day)}
            name="datePickerDay"
          >
            {format(day, "dd")}
          </Styled.DatePickerDay>
        ))}
      </Styled.GridDatePicker>
    </Styled.DatePickerWrapper>
  );
};

export default DatePickerPopup;
