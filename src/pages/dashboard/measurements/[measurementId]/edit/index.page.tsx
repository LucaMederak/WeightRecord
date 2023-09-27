import React from "react";

//components
import Heading from "@/components/heading/Heading";
import EditMeasurementForm from "./components/form/EditMeasurementForm";

const EditMeasurementPage = () => {
  return (
    <>
      <Heading title="Edytuj pomiar" returnLink="dashboard/measurements" />
      <EditMeasurementForm />
    </>
  );
};

export default EditMeasurementPage;
