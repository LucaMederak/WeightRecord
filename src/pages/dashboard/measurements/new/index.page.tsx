import React from "react";

//components
import Heading from "@/components/heading/Heading";
import NewMeasurementForm from "./components/form/NewMeasurementForm";

const NewMeasurementPage = () => {
  return (
    <>
      <Heading title="Dodaj nowy pomiar" returnLink="dashboard/measurements" />
      <NewMeasurementForm />
    </>
  );
};

export default NewMeasurementPage;
