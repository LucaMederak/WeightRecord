import { IChildrenProps } from "@/interfaces/children.interfaces";
import React, { ReactNode } from "react";

//styles
import * as Styled from "./Button.styles";

export interface IButtonProps {
  size?: "small" | "base" | "large";
  type?: "button" | "submit";
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "disabled";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

const Button = ({
  size = "base",
  variant = "primary",
  type = "button",
  className,
  onClick,
  children,
  icon,
}: IButtonProps & IChildrenProps) => {
  return (
    <Styled.Button
      type={type}
      size={size}
      variant={variant}
      disabled={variant === "disabled"}
      onClick={onClick}
      className={className}
    >
      {icon}
      {children}
    </Styled.Button>
  );
};

export default Button;
