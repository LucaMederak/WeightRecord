import React from "react";

//icons
import { FaChevronLeft } from "react-icons/fa";

//styles
import * as Styled from "./ReturnLink.styles";

const ReturnLink = ({ returnLink }: { returnLink: string }) => {
  return (
    <Styled.ReturnLinkWrapper href={`/${returnLink}`}>
      <span>
        <FaChevronLeft />
      </span>
      wróć
    </Styled.ReturnLinkWrapper>
  );
};

export default ReturnLink;
