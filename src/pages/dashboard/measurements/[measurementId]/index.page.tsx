import React, { useState } from "react";
import { useRouter } from "next/router";

//queries
import { useClient } from "@/queries/useClients";

//components
import Heading from "@/components/heading/Heading";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import Info from "./components/info/Info";
import Button from "@/components/button/Button";
import ModalContentWrapper from "@/components/modal/Modal";
import DeleteMeasurementModal from "./components/deleteMeasurementModal/DeleteMeasurementModal";

//animations
import { AnimatePresence } from "framer-motion";

//styles
import * as Styled from "./Measurement.styles";
import { useMeasurement } from "@/queries/useMeasurements";

const MeasurementPage = () => {
  const [openDeleteMeasurementModal, setOpenDeleteMeasurementModal] =
    useState<boolean>(false);
  const router = useRouter();
  const { measurementId } = router.query;

  const { measurement, measurementLoading, measurementError } = useMeasurement(
    measurementId as string
  );

  if (measurementLoading) return <LoadingGrid />;
  if (measurementError) return <DataError />;

  return (
    <Styled.MeasurementWrapper>
      <Heading title="Pomiar" returnLink="dashboard/measurements" />
      <Styled.ButtonsWrapper>
        <Button
          size="small"
          variant="primary"
          onClick={() =>
            router.push(`/dashboard/measurements/${measurement?._id}/edit`)
          }
        >
          edytuj
        </Button>
        <Button
          size="small"
          variant="danger"
          onClick={() => setOpenDeleteMeasurementModal(true)}
        >
          usuń
        </Button>
      </Styled.ButtonsWrapper>

      {measurement && <Info measurement={measurement} />}
      <AnimatePresence>
        {measurement && openDeleteMeasurementModal && (
          <ModalContentWrapper
            onClose={() => setOpenDeleteMeasurementModal(false)}
            width="sm"
          >
            <DeleteMeasurementModal
              measurement={measurement}
              closeModal={() => setOpenDeleteMeasurementModal(false)}
            />
          </ModalContentWrapper>
        )}
      </AnimatePresence>
    </Styled.MeasurementWrapper>
  );
};

export default MeasurementPage;
