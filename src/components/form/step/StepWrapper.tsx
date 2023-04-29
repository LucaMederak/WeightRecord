import { IChildrenProps } from "@/interfaces/children.interfaces";
import React from "react";

import * as Styled from "./StepWrapper.styles";

interface IStepWrapperProps {
  children: IChildrenProps["children"];
  title: string;
  description?: string;
  requiredFields?: boolean;
}

const StepWrapper = ({
  children,
  title,
  description,
  requiredFields,
}: IStepWrapperProps) => {
  return (
    <Styled.StepWrapper>
      <Styled.StepHeadingWrapper>
        {requiredFields && (
          <Styled.RequiredInfo>zawiera wymagane pola</Styled.RequiredInfo>
        )}
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </Styled.StepHeadingWrapper>
      <Styled.StepContentWrapper>{children}</Styled.StepContentWrapper>
    </Styled.StepWrapper>
  );
};

export default StepWrapper;
