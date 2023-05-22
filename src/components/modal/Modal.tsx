import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";

//interfaces
import { IModalProps } from "./Modal.interfaces";
import { IChildrenProps } from "@/interfaces/children.interfaces";

//styles
import * as Styles from "./Modal.styles";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ModalContentWrapper = ({
  children,
  onClose,
  width,
}: IModalProps & IChildrenProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect((): any => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node) && onClose) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return ReactDom.createPortal(
    <>
      <Styles.ModalContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={inter.className}
      >
        <Styles.ModalContentWrapper ref={modalRef} modalWidth={width}>
          {children}
        </Styles.ModalContentWrapper>
      </Styles.ModalContainer>
    </>,
    document.getElementById("modal-portal") as HTMLElement
  );
};

export default ModalContentWrapper;
