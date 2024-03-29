import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

//styles
import * as Styled from "./DataError.styles";

const DataError = ({ message }: { message?: string }) => {
  return (
    <Styled.ErrorWrapper>
      <FaExclamationCircle />
      <h3>{message || " Wystąpił błąd podczas pobierania danych"}</h3>
    </Styled.ErrorWrapper>
  );
};

export default DataError;
