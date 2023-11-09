import React, { useEffect, useState } from "react";
import { handleApiErrors } from "@/utils/apiErrorsHandler";
import { useAlert } from "@/context/Alert.context";
import { IClientData } from "@/interfaces/client.interfaces";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";

//components
import Button from "@/components/button/Button";

//assets
import DeleteImg from "@/assets/delete.svg";
import Image from "next/image";

//styles
import * as Styled from "./DeleteClientModal.styles";

//services
import { deleteClient } from "@/services/client.service";

interface IDeleteClientModalProps {
  client: IClientData;
  closeModal: () => void;
}

const DeleteClientModal = ({ client, closeModal }: IDeleteClientModalProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { handleAlert } = useAlert();

  const deleteClientHandler = async () => {
    try {
      setLoading(true);
      await deleteClient(client._id);
      closeModal();
      handleAlert("success", "Usunięto klienta");
      router.push("/dashboard/clients");
    } catch (e) {
      setLoading(false);
      const { alertMessage } = handleApiErrors(e);
      handleAlert(
        "error",
        `Usuwanie klienta nie powiodło się. ${alertMessage}`
      );
    }
  };

  return (
    <Styled.DeleteClientWrapper>
      <Image src={DeleteImg} alt="delete image" width={250} height={250} />
      <h2>
        Czy napewno chcesz usunąć klienta:{" "}
        <b>
          {client.firstName} {client.surname}
        </b>
      </h2>

      <Button
        size={"base"}
        variant={loading ? "disabled" : "danger"}
        type="button"
        onClick={deleteClientHandler}
      >
        {loading ? (
          <ReactLoading type={"spin"} color={"white"} height={20} width={20} />
        ) : (
          "Usuń klienta"
        )}
      </Button>
    </Styled.DeleteClientWrapper>
  );
};

export default DeleteClientModal;
