import React from "react";

//icons
import { FaPlus } from "react-icons/fa";

//components
import ButtonLink from "@/components/buttonLink/ButtonLink";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import DataNotFound from "@/components/dataNotFound/DataNotFound";
import Heading from "@/components/heading/Heading";
import Table from "@/components/table/Table";

//display data
import { clientColumns, getClientsData } from "./Clients.display";

//services
import { getClients } from "@/services/client.service";

const ClientsPage = () => {
  const { clients, clientsLoading, clientsError } = getClients();

  if (clientsLoading) return <LoadingGrid />;
  if (clientsError) return <DataError />;

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

      {!clients || clients?.length < 1 ? (
        <DataNotFound />
      ) : (
        <Table
          items={getClientsData(clients)}
          columns={clientColumns}
          itemLink={"/dashboard/clients"}
        />
      )}
    </>
  );
};

export default ClientsPage;
