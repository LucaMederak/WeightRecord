import React, { useState, useRef, useEffect } from "react";

//styles
import * as Styled from "./Autocomplete.styles";

import { IAutocompleteProps } from "./Autocomplete.interfaces";
import { useController, useForm, useFormContext } from "react-hook-form";

//components
import AutocompletePopup from "./autocompletePopup/AutocompletePopup";
import { isEqual, isValid } from "date-fns";

const Autocomplete = ({
  name,
  label,
  fullWidth = false,
  options,
  optionLabel,
  optionRender,
}: IAutocompleteProps) => {
  const renderValue = optionRender || optionLabel;

  const {
    field,
    fieldState: { error, isTouched },
  } = useController({ name });

  const { setValue, trigger } = useFormContext();

  const inputProps = {
    ...field,
  };

  const [autocompletePopup, setAutocompletePopup] = useState(false);
  const [inputContent, setInputContent] = useState<string>("");

  useEffect(() => {
    //close popup helper
    if (autocompletePopup === false) {
      const listFilter = options.filter(
        (option) => option[optionLabel].toString() === inputContent
      );

      if (listFilter.length < 1) {
        if (typeof options[0][renderValue] === "number") {
          setValue(name, 0);
        } else {
          setValue(name, "");
        }
        setInputContent("");
      }
    }
  }, [autocompletePopup]);

  //initial values
  useEffect(() => {
    const getOptionLabel = options.find(
      (option) => option[renderValue] === field.value
    );

    if (getOptionLabel) {
      setValue(name, field.value);
      setInputContent(getOptionLabel[optionLabel].toString());
    }

    const validDate = isValid(new Date(field.value));

    if (validDate) {
      const currentDate = new Date();
      const defaultDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        new Date(field.value).getHours(),
        new Date(field.value).getMinutes()
      );

      const getSameDate = options.find((option) =>
        isEqual(new Date(option[renderValue]), defaultDate)
      );

      if (getSameDate) {
        setValue(name, field.value);
        setInputContent(getSameDate[optionLabel].toString());
      }
    }
  }, [field.value]);

  const optionFilter = (options: IAutocompleteProps["options"]) => {
    const isSelectedValue = options.find(
      (option) => option[optionLabel].toString() === inputContent
    );

    //return all available options when selected value
    if (isSelectedValue) {
      return options;
    }

    //filter options when input content was change
    const filterOptions = options.filter((option) =>
      option[optionLabel]
        .toString()
        .toLowerCase()
        .includes(inputContent.toLowerCase())
    );

    return filterOptions;
  };

  const handleChange = (value: string) => {
    if (typeof options[0][renderValue] === "number") {
      const numberValue = parseFloat(parseFloat(value).toFixed(2));

      setValue(name, numberValue, { shouldDirty: true });
    } else {
      setValue(name, value !== null ? value : "", { shouldDirty: true });
    }

    const getOptionLabel = options.find(
      (option) => option[renderValue].toString() === value
    );

    if (getOptionLabel) {
      setInputContent(getOptionLabel[optionLabel].toString());
      setAutocompletePopup(false);
    }

    trigger();
  };

  return (
    <Styled.AutocompleteWrapper fullWidth={fullWidth}>
      <Styled.AutoCompleteInputWrapper>
        <label htmlFor={name}>{label}</label>
        <input
          {...inputProps}
          onFocus={() => setAutocompletePopup(true)}
          autoComplete="off"
          onChange={(e) => setInputContent(e.target.value)}
          value={inputContent}
        />

        {isTouched && error && <p>{error.message}</p>}
      </Styled.AutoCompleteInputWrapper>

      <AutocompletePopup
        open={autocompletePopup}
        close={() => setAutocompletePopup(false)}
        fullWidth={fullWidth}
        options={optionFilter(options)}
        optionLabel={optionLabel}
        renderValue={renderValue}
        handleChange={handleChange}
      />
    </Styled.AutocompleteWrapper>
  );
};

export default Autocomplete;
