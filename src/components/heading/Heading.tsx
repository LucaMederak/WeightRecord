import React from "react";

//styles
import * as Styled from "./Heading.styles";

//icons
import ReturnLink from "../returnLink/ReturnLink";

interface IHeadingProps {
  title: string;
  returnLink?: string;
}

const Heading = ({ title, returnLink }: IHeadingProps) => {
  return (
    <Styled.HeadingWrapper>
      {returnLink && <ReturnLink returnLink={returnLink} />}
      <h1>{title}</h1>
    </Styled.HeadingWrapper>
  );
};

export default Heading;
