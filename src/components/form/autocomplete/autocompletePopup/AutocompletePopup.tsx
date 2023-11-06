import React, { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

//interfaces
import { IAutocompletePopupProps } from "./AutocompletePopup.interfaces";

//styles
import * as Styled from "./AutocompletePopup.styles";

const CalendarPopup = ({
  open,
  close,
  fullWidth,
  renderValue,
  optionLabel,
  options,
  handleChange,
}: IAutocompletePopupProps) => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useFormContext();

  const autocompleteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!autocompleteRef.current?.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  if (!open) return null;

  return (
    <Styled.AutocompletePopupWrapper
      fullWidth={fullWidth}
      ref={autocompleteRef}
    >
      {options.length < 1 && <div>brak wyników</div>}

      {options.length > 0 &&
        options.map((option) => (
          <Styled.AutocompletePopupItem
            key={option[renderValue]}
            onClick={() => handleChange(option[renderValue].toString())}
            id="autocompleteOption"
          >
            {option[optionLabel]}
          </Styled.AutocompletePopupItem>
        ))}
    </Styled.AutocompletePopupWrapper>
  );
};

export default CalendarPopup;
