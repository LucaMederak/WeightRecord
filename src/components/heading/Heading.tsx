import React from "react";

//styles
import * as Styled from "./Heading.styles";

//icons
import ReturnLink from "../returnLink/ReturnLink";

interface IHeadingProps {
  title: string;
  returnLink?: string;
  actionComponent?: JSX.Element;
}

const Heading = ({ title, returnLink, actionComponent }: IHeadingProps) => {
  return (
    <Styled.HeadingContainer>
      {returnLink && <ReturnLink returnLink={returnLink} />}
      <Styled.HeadingWithActionWrapper>
        <h1>{title}</h1>
        {actionComponent}
      </Styled.HeadingWithActionWrapper>
    </Styled.HeadingContainer>
  );
};

export default Heading;
