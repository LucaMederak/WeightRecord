import React from "react";

import * as Styled from "./Alert.styles";

//icons
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

export interface IAlertProps {
  type: "error" | "warning" | "success";
  title: string;
}

const iconRender = (type: IAlertProps["type"]) => {
  if (type === "error" || type === "warning") {
    return <FaInfoCircle />;
  }

  return <FaCheckCircle />;
};

const Alert = ({ type, title }: IAlertProps) => {
  return (
    <Styled.AlertWrapper
      type={type}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span>{iconRender(type)}</span>
      <p> {title}</p>
    </Styled.AlertWrapper>
  );
};

export default Alert;
