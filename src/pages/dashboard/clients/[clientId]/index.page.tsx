import React, { useState } from "react";
import { useRouter } from "next/router";

//queries
import { useClient } from "@/queries/useClients";

//components
import Heading from "@/components/heading/Heading";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import Info from "./components/info/Info";
import Button from "@/components/button/Button";
import ModalContentWrapper from "@/components/modal/Modal";

//animations
import { AnimatePresence } from "framer-motion";
import DeleteClientModal from "./components/deleteClientModal/DeleteClientModal";

//styles
import * as Styled from "./Client.styles";

const ClientPage = () => {
  const [openDeleteClientModal, setOpenDeleteClientModal] =
    useState<boolean>(false);
  const router = useRouter();
  const { clientId } = router.query;

  const { client, clientLoading, clientError } = useClient(clientId as string);

  if (clientLoading) return <LoadingGrid />;
  if (clientError) return <DataError />;

  return (
    <Styled.ClientWrapper>
      <Heading title="Klient" returnLink="dashboard/clients" />
      <Styled.ButtonsWrapper>
        <Button
          size="small"
          variant="primary"
          onClick={() => router.push(`/dashboard/clients/edit/${client?._id}`)}
        >
          edytuj
        </Button>
        <Button
          size="small"
          variant="danger"
          onClick={() => setOpenDeleteClientModal(true)}
        >
          usuń
        </Button>
      </Styled.ButtonsWrapper>

      {client && <Info client={client} />}
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
    </Styled.ClientWrapper>
  );
};

export default ClientPage;
