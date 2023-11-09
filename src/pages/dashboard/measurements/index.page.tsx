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
import {
  measurementColumns,
  getMeasurementsData,
} from "./Measurements.display";

//services
import { getMeasurements } from "@/services/measurement.service";

const MeasurementsPage = () => {
  const { measurements, measurementsLoading, measurementsError } =
    getMeasurements();

  if (measurementsLoading) return <LoadingGrid />;
  if (measurementsError) return <DataError />;

  return (
    <>
      <Heading
        title="Pomiary"
        actionComponent={
          <ButtonLink
            icon={<FaPlus />}
            text="dodaj pomiar"
            linkSize={"base"}
            variant="primary"
            link={`/dashboard/measurements/new`}
          />
        }
      />
      {!measurements || measurements?.length < 1 ? (
        <DataNotFound />
      ) : (
        <Table
          items={getMeasurementsData(measurements)}
          columns={measurementColumns}
          itemLink={"/dashboard/measurements"}
        />
      )}
    </>
  );
};

export default MeasurementsPage;
