import React from "react";
import { useClients } from "@/queries/useClients";
import { FaPlus } from "react-icons/fa";
import DataEmptyImg from "@/assets/dataEmpty.svg";

//components
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import NewMeasurementForm from "./components/form/NewMeasurementForm";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import ButtonLink from "@/components/buttonLink/ButtonLink";

//styles
import * as Styled from "./NewMeasurement.styles";

const NewMeasurementPage = () => {
  const { clients, clientsError, clientsLoading } = useClients();

  if (clientsLoading) return <LoadingGrid />;
  if (clientsError)
    return (
      <DataError message="Wystąpił błąd podczas pobierania klientów (spróbuj ponownie załodować stronę)" />
    );

  if (!clients || clients.length < 1)
    return (
      <Styled.ClientsNotFoundWrapper>
        <Image
          src={DataEmptyImg}
          alt="client not found image"
          width={200}
          height={100}
        />
        <h2>Nie znaleziono klientów</h2>
        <p>Dodaj pierwszego klienta aby dodać pomiar</p>

        <ButtonLink
          icon={<FaPlus />}
          text="Dodaj klienta"
          linkSize={"base"}
          variant="primary"
          link={`/dashboard/clients/new`}
        />
      </Styled.ClientsNotFoundWrapper>
    );

  return (
    <>
      <Heading title="Dodaj nowy pomiar" returnLink="dashboard/measurements" />
      <NewMeasurementForm />
    </>
  );
};

export default NewMeasurementPage;
