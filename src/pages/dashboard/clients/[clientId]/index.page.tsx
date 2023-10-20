import React from "react";
import { useRouter } from "next/router";

//queries
import { useClient } from "@/queries/useClients";

//components
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import Info from "./components/info/Info";

//styles
import * as Styled from "./Client.styles";
import DataNotFound from "@/components/dataNotFound/DataNotFound";
import ClientMeasurements from "./components/clientMeasurements/ClientMeasurements";

const ClientPage = () => {
  const router = useRouter();
  const { clientId } = router.query;

  const { client, clientLoading, clientError } = useClient(clientId as string);

  if (clientLoading) return <LoadingGrid />;
  if (clientError) return <DataError />;
  if (!client) return <DataNotFound />;

  return (
    <Styled.ClientWrapper>
      <Info client={client} />
      <ClientMeasurements clientId={client._id} />
    </Styled.ClientWrapper>
  );
};

export default ClientPage;
