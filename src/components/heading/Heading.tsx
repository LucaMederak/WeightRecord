import React from "react";

//styles
import * as Styled from "./Heading.styles";

//icons
import { FaChevronLeft } from "react-icons/fa";

interface IHeadingProps {
  title: string;
  returnLink?: string;
}

const Heading = ({ title, returnLink }: IHeadingProps) => {
  return (
    <Styled.HeadingWrapper>
      {returnLink && (
        <Styled.ReturnLinkWrapper href={`/${returnLink}`}>
          <span>
            <FaChevronLeft />
          </span>
          wróć
        </Styled.ReturnLinkWrapper>
      )}
      <h1>{title}</h1>
    </Styled.HeadingWrapper>
  );
};

export default Heading;
