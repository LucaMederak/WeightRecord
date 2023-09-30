import React from "react";
import { FaInfoCircle } from "react-icons/fa";

//styles
import * as Styled from "./DataNotFound.styles";

const DataNotFound = () => {
  return (
    <Styled.NotFoundWrapper>
      <FaInfoCircle />
      <h3>Nie znaleziono danych</h3>
    </Styled.NotFoundWrapper>
  );
};

export default DataNotFound;
