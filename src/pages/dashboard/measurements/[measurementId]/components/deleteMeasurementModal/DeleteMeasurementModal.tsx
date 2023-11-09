import React, { useState } from "react";
import { useAlert } from "@/context/Alert.context";
import Button from "@/components/button/Button";
import { IMeasurementData } from "@/interfaces/measurement.interfaces";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";

//assets
import DeleteImg from "@/assets/delete.svg";
import Image from "next/image";

//styles
import * as Styled from "./DeleteMeasurementModal.styles";

//utils
import { handleApiErrors } from "@/utils/apiErrorsHandler";

//services
import { deleteMeasurement } from "@/services/measurement.service";

interface IDeleteMeasurementModalProps {
  measurement: IMeasurementData;
  closeModal: () => void;
}

const DeleteMeasurementModal = ({
  measurement,
  closeModal,
}: IDeleteMeasurementModalProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { handleAlert } = useAlert();

  const deleteMeasurementHandler = async () => {
    try {
      setLoading(true);
      await deleteMeasurement(measurement._id);
      closeModal();
      handleAlert("success", "Usunięto pomiar");
      router.push("/dashboard/measurements");
    } catch (e) {
      setLoading(false);
      const { alertMessage } = handleApiErrors(e);
      handleAlert(
        "error",
        `Usuwanie pomiaru nie powiodło się. ${alertMessage}`
      );
    }
  };

  return (
    <Styled.DeleteMeasurementWrapper>
      <Image src={DeleteImg} alt="delete image" width={250} height={250} />
      <h2>
        Czy napewno chcesz usunąć pomiar: <b>{measurement.name}</b>
      </h2>

      <Button
        size={"base"}
        variant={loading ? "disabled" : "danger"}
        type="button"
        onClick={deleteMeasurementHandler}
      >
        {loading ? (
          <ReactLoading type={"spin"} color={"white"} height={20} width={20} />
        ) : (
          "Usuń pomiar"
        )}
      </Button>
    </Styled.DeleteMeasurementWrapper>
  );
};

export default DeleteMeasurementModal;
