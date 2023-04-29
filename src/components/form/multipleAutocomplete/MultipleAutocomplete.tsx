import React, { useState, useRef, useEffect } from "react";

//styles
import * as Styled from "./MultipleAutocomplete.styles";

import { IAutocompleteProps } from "./MultipleAutocomplete.interfaces";
import { useController, useForm, useFormContext } from "react-hook-form";

//icons
import { FaTimes } from "react-icons/fa";

//components
import AutocompletePopup from "./autocompletePopup/AutocompletePopup";

const MultipleAutocomplete = ({
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

  const { setValue, trigger, watch, getValues } = useFormContext();

  const fieldValues = watch(name) as any[];
  const inputProps = {
    ...field,
    name,
  };

  const [autocompletePopup, setAutocompletePopup] = useState(false);
  const [inputContent, setInputContent] = useState<string>(
    field.value?.toString() || ""
  );

  useEffect(() => {
    return setInputContent("");
  }, [autocompletePopup]);

  const optionFilter = (options: IAutocompleteProps["options"]) => {
    if (
      options.find((option) => option[optionLabel].toString() === inputContent)
    ) {
      return options;
    }

    return options.filter((option) =>
      option[optionLabel]
        .toString()
        .toLowerCase()
        .includes(inputContent.toLowerCase())
    );
  };

  const handleChange = (value: string) => {
    if (typeof options[0][renderValue] === "number") {
      const numberValue = parseFloat(parseFloat(value).toFixed(2));
      if (Array.isArray(fieldValues)) {
        return setValue(name, [...fieldValues, numberValue]);
      }
      setValue(name, [numberValue]);
    } else {
      if (Array.isArray(fieldValues)) {
        return setValue(name, value !== null && [...fieldValues, value]);
      }

      setValue(name, value !== null && [value]);
    }

    setAutocompletePopup(false);
    trigger();
  };

  const removeItem = (itemRender: string | number) => {
    const selectedValues = fieldValues.filter(
      (fieldValue) => fieldValue !== itemRender
    );
    setValue(name, selectedValues);
  };

  const getOptionLabel = (fieldValue: string) => {
    const option = options.find(
      (option) => option[renderValue].toString() === fieldValue
    );

    if (!option) return "";

    return option[optionLabel].toString();
  };

  return (
    <Styled.AutocompleteWrapper fullWidth={fullWidth}>
      <Styled.AutoCompleteInputWrapper>
        <label htmlFor={name}>{label}</label>
        <Styled.MultipleAutoCompleteContentWrapper>
          {fieldValues &&
            fieldValues.length > 0 &&
            fieldValues.map((fieldValue) => (
              <Styled.SelectedItem
                key={fieldValue}
                onClick={() => removeItem(fieldValue)}
              >
                <span>{getOptionLabel(fieldValue)}</span>
                <button>
                  <FaTimes />
                </button>
              </Styled.SelectedItem>
            ))}

          <input
            {...inputProps}
            onFocus={() => setAutocompletePopup(true)}
            autoComplete="off"
            onChange={(e) => setInputContent(e.target.value)}
            value={inputContent}
          />
        </Styled.MultipleAutoCompleteContentWrapper>
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
        name={name}
      />
    </Styled.AutocompleteWrapper>
  );
};

export default MultipleAutocomplete;
