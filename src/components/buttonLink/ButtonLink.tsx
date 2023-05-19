import React, { ReactNode } from "react";

//styles
import * as Styled from "./ButtonLink.styles";

export interface IButtonLinkProps {
  linkSize?: "small" | "base" | "large";
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "disabled";
  className?: string;
  text: string;
  link: string;
  icon?: ReactNode;
}

const ButtonLink = ({
  linkSize = "base",
  variant = "primary",
  className,
  text,
  link,
  icon,
}: IButtonLinkProps) => {
  return (
    <Styled.ButtonLink
      variant={variant}
      linkSize={linkSize}
      className={className}
      href={link}
    >
      {icon}
      {text}
    </Styled.ButtonLink>
  );
};

export default ButtonLink;
