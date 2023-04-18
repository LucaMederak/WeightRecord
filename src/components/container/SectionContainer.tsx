import React from "react";
import { IChildrenProps } from "@/interfaces/children.interfaces";

//styles
import * as Styled from "./SectionContainer.styles";

export interface ISectionContainerProps {
  children: IChildrenProps["children"];
  variant?: "default" | "contrast" | "dark";
  borderTopDisplay?: boolean;
  sectionId?: string;
  fillToScreen?: boolean;
}

const SectionContainer = ({
  children,
  variant = "default",
  borderTopDisplay = false,
  sectionId,
  fillToScreen,
}: ISectionContainerProps) => {
  return (
    <Styled.SectionContainer
      variant={variant}
      borderTopDisplay={borderTopDisplay}
      id={sectionId}
      fillToScreen={fillToScreen}
    >
      <Styled.SectionContentWrapper>{children}</Styled.SectionContentWrapper>
    </Styled.SectionContainer>
  );
};

export default SectionContainer;
