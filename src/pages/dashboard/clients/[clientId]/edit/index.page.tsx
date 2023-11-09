import React from "react";
import { useRouter } from "next/router";

//components
import Heading from "@/components/heading/Heading";
import EditClientForm from "./components/form/EditClientForm";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import DataNotFound from "@/components/dataNotFound/DataNotFound";

//services
import { getClient } from "@/services/client.service";

const EditClientPage = () => {
  const router = useRouter();

  const { clientId } = router.query;
  const { client, clientLoading, clientError } = getClient(clientId as string);

  if (clientLoading) return <LoadingGrid />;
  if (clientError) return <DataError />;
  if (!client) return <DataNotFound />;

  return (
    <>
      <Heading title="Edytuj klienta" returnLink="dashboard/clients" />
      <EditClientForm client={client} />
    </>
  );
};

export default EditClientPage;
