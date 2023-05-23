import React from "react";

//components
import Heading from "@/components/heading/Heading";
import EditClientForm from "./components/form/EditClientForm";

const EditClientPage = () => {
  return (
    <>
      <Heading title="Edytuj klienta" returnLink="dashboard/clients" />
      <EditClientForm />
    </>
  );
};

export default EditClientPage;
