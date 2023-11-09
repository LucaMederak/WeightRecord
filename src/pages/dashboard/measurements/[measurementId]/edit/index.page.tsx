import React from "react";
import { useRouter } from "next/router";

//services
import { getMeasurement } from "@/services/measurement.service";

//components
import Heading from "@/components/heading/Heading";
import EditMeasurementForm from "./components/form/EditMeasurementForm";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import DataNotFound from "@/components/dataNotFound/DataNotFound";

const EditMeasurementPage = () => {
  const router = useRouter();
  const { measurementId } = router.query;
  const { measurement, measurementLoading, measurementError } = getMeasurement(
    measurementId as string
  );

  if (measurementLoading) return <LoadingGrid />;
  if (measurementError) return <DataError />;
  if (!measurement) return <DataNotFound />;

  return (
    <>
      <Heading title="Edytuj pomiar" returnLink="dashboard/measurements" />
      <EditMeasurementForm measurement={measurement} />
    </>
  );
};

export default EditMeasurementPage;
