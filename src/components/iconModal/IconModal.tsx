import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

//styles
import * as Styled from "./IconModal.styles";

//interfaces
import { IIconModalProps } from "./IconModal.interfaces";
import { IChildrenProps } from "@/interfaces/children.interfaces";
import Image from "next/image";

const IconModal = ({
  icon,
  img,
  children,
  background,
}: IIconModalProps & IChildrenProps) => {
  const [iconModalOpen, setIconModalOpen] = useState(false);

  return (
    <Styled.IconModalContainer
      onMouseEnter={() => setIconModalOpen(true)}
      onMouseLeave={() => setIconModalOpen(false)}
    >
      <Styled.IconModalWrapper background={background}>
        {img ? (
          <Image
            src={img}
            alt="icon modal image"
            fill
            style={{
              objectFit: "cover",
              borderRadius: "0.8rem",
            }}
          />
        ) : (
          icon
        )}
      </Styled.IconModalWrapper>

      <AnimatePresence>
        {iconModalOpen && (
          <Styled.ModalContentContainer>
            <Styled.ModalContentWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </Styled.ModalContentWrapper>
          </Styled.ModalContentContainer>
        )}
      </AnimatePresence>
    </Styled.IconModalContainer>
  );
};

export default IconModal;
