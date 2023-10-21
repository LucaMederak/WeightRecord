import React from "react";

//queries
import { useMeasurements } from "@/queries/measurements/useMeasurements";

//icons
import { FaPlus } from "react-icons/fa";

//components
import ButtonLink from "@/components/buttonLink/ButtonLink";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import DataNotFound from "@/components/dataNotFound/DataNotFound";
import Heading from "@/components/heading/Heading";

//interfaces
import Table from "@/components/table/Table";

//display helpers
import {
  measurementColumns,
  getMeasurementsData,
} from "@/queries/measurements/displayMeasurements";

const MeasurementsPage = () => {
  const { measurements, measurementsLoading, measurementsError } =
    useMeasurements();

  if (measurementsLoading) return <LoadingGrid />;
  if (measurementsError) return <DataError />;
  if (!measurements || measurements.length < 1)
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
        <DataNotFound />
      </>
    );

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
      <Table
        items={getMeasurementsData(measurements)}
        columns={measurementColumns}
        itemLink={"/dashboard/measurements"}
      />
    </>
  );
};

export default MeasurementsPage;
