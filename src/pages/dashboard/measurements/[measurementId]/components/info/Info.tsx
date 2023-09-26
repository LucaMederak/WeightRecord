import React from "react";
import { format } from "date-fns";

//styles
import * as Styled from "./Info.styles";
import { IMeasurementData } from "@/interfaces/measurement.interfaces";

interface IMeasurementInfoProps {
  measurement: IMeasurementData;
}

const Measurement = ({ measurement }: IMeasurementInfoProps) => {
  return (
    <>
      <Styled.InfoWrapper>
        <Styled.InfoItem>
          <span>pomiar:</span>
          <p>{measurement.name}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>data pomiaru:</span>
          <p>{format(new Date(measurement.date), "dd.MM.yyyy")}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>klient:</span>
          <p>
            {measurement.client.firstName + " " + measurement.client.surname}{" "}
          </p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>notatki:</span>
          <p>{measurement.notes || "-"}</p>
        </Styled.InfoItem>
      </Styled.InfoWrapper>
    </>
  );
};

export default Measurement;
