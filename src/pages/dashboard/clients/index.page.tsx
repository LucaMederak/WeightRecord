import React from "react";

//queries
import { useClients } from "@/queries/clients/useClients";

//icons
import { FaPlus } from "react-icons/fa";

//components
import ButtonLink from "@/components/buttonLink/ButtonLink";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import DataNotFound from "@/components/dataNotFound/DataNotFound";
import Heading from "@/components/heading/Heading";
import Table from "@/components/table/Table";
import {
  clientColumns,
  getClientsData,
} from "@/queries/clients/displayClients";

const ClientsPage = () => {
  const { clients, clientsLoading, clientsError } = useClients();

  if (clientsLoading) return <LoadingGrid />;
  if (clientsError) return <DataError />;
  if (!clients || clients.length < 1)
    return (
      <>
        <Heading
          title="Klienci"
          actionComponent={
            <ButtonLink
              icon={<FaPlus />}
              text="Dodaj klienta"
              linkSize={"base"}
              variant="primary"
              link={`/dashboard/clients/new`}
            />
          }
        />
        <DataNotFound />
      </>
    );

  return (
    <>
      <Heading
        title="Klienci"
        actionComponent={
          <ButtonLink
            icon={<FaPlus />}
            text="Dodaj klienta"
            linkSize={"base"}
            variant="primary"
            link={`/dashboard/clients/new`}
          />
        }
      />
      <Table
        items={getClientsData(clients)}
        columns={clientColumns}
        itemLink={"/dashboard/clients"}
      />
    </>
  );
};

export default ClientsPage;
