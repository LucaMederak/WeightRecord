import React from "react";
import { useRouter } from "next/router";

//components
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import DataNotFound from "@/components/dataNotFound/DataNotFound";
import Info from "./components/info/Info";

//styles
import * as Styled from "./Measurement.styles";

//services
import { getMeasurement } from "@/services/measurement.service";

const MeasurementPage = () => {
  const router = useRouter();
  const { measurementId } = router.query;

  const { measurement, measurementLoading, measurementError } = getMeasurement(
    measurementId as string
  );

  if (measurementLoading) return <LoadingGrid />;
  if (measurementError) return <DataError />;
  if (!measurement) return <DataNotFound />;

  return (
    <Styled.MeasurementWrapper>
      <Info measurement={measurement} />
    </Styled.MeasurementWrapper>
  );
};

export default MeasurementPage;
