import React, { useEffect, useState } from "react";
import { useAlert } from "@/context/Alert.context";
import Button from "@/components/button/Button";
import { IClientData } from "@/interfaces/client.interfaces";
import { useRouter } from "next/router";
import axiosInstance from "@/utils/axiosInstance";
import ReactLoading from "react-loading";

//assets
import DeleteImg from "@/assets/delete.svg";
import Image from "next/image";

//styles
import * as Styled from "./DeleteClientModal.styles";

interface IDeleteClientModalProps {
  client: IClientData;
  closeModal: () => void;
}

const DeleteClientModal = ({ client, closeModal }: IDeleteClientModalProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { handleAlert } = useAlert();

  const deleteClient = async () => {
    try {
      setLoading(true);
      await axiosInstance.delete(`/api/clients/${client._id}`, {
        withCredentials: true,
      });

      closeModal();
      handleAlert("success", "Usunięto klienta");
      router.push("/dashboard/clients");
    } catch (e) {
      setLoading(false);
      console.log(e);
      handleAlert("error", "Wystąpił błąd podczas usuwania klienta");
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
        onClick={deleteClient}
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
