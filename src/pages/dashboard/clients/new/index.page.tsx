import React from "react";

//components
import Heading from "@/components/heading/Heading";
import NewClientForm from "./components/form/NewClientForm";

const NewClientPage = () => {
  return (
    <>
      <Heading title="Dodaj nowego klienta" returnLink="dashboard/clients" />
      <NewClientForm />
    </>
  );
};

export default NewClientPage;
