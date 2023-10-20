import React, { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

//styles
import * as Styled from "./Info.styles";
import { IClientData } from "@/interfaces/client.interfaces";
import { FaEdit, FaTrash } from "react-icons/fa";

//components
import Heading from "@/components/heading/Heading";
import Button from "@/components/button/Button";
import ModalContentWrapper from "@/components/modal/Modal";
import DeleteClientModal from "../deleteClientModal/DeleteClientModal";
import ReturnLink from "@/components/returnLink/ReturnLink";

interface IClientInfoProps {
  client: IClientData;
}

const Info = ({ client }: IClientInfoProps) => {
  const router = useRouter();
  const [openDeleteClientModal, setOpenDeleteClientModal] =
    useState<boolean>(false);

  return (
    <Styled.SectionWrapper>
      <ReturnLink returnLink="dashboard/clients" />
      <Styled.HeadingWrapper>
        <h2>Klient</h2>
        <Styled.ButtonsWrapper>
          <Button
            icon={<FaEdit />}
            size="base"
            variant="primary"
            onClick={() =>
              router.push(`/dashboard/clients/${client?._id}/edit`)
            }
          >
            edytuj
          </Button>
          <Button
            icon={<FaTrash />}
            size="base"
            variant="danger"
            onClick={() => setOpenDeleteClientModal(true)}
          >
            usuń
          </Button>
        </Styled.ButtonsWrapper>
      </Styled.HeadingWrapper>

      <Styled.InfoWrapper>
        <Styled.InfoItem>
          <span>klient:</span>
          <p>
            {client.firstName} {client.surname}
          </p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>email:</span>
          <p>{client.email || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>data urodzenia:</span>
          <p>{format(new Date(client.dateOfBirth), "dd.MM.yyyy")}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>współczynnik aktywności fizycznej (PAL):</span>
          <p>{client.pal || "-"}</p>
        </Styled.InfoItem>
      </Styled.InfoWrapper>
      <AnimatePresence>
        {client && openDeleteClientModal && (
          <ModalContentWrapper
            onClose={() => setOpenDeleteClientModal(false)}
            width="sm"
          >
            <DeleteClientModal
              client={client}
              closeModal={() => setOpenDeleteClientModal(false)}
            />
          </ModalContentWrapper>
        )}
      </AnimatePresence>
    </Styled.SectionWrapper>
  );
};

export default Info;
