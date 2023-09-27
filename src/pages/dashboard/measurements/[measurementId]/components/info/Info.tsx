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
      <Styled.InfoWrapper>
        <Styled.InfoItem>
          <span>masa ciała (kg):</span>
          <p>{measurement.weight}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>wysokość ciała (cm):</span>
          <p>{measurement.height}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>PPM (Harris):</span>
          <p>{measurement.ppmHarris}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>PPM (Mifflin):</span>
          <p>{measurement.ppmMifflin}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>CPM (Całkowita Przemiana Materii):</span>
          <p>{measurement.cpm}</p>
        </Styled.InfoItem>
      </Styled.InfoWrapper>
      <Styled.InfoWrapper>
        <Styled.InfoItem>
          <span>Obwód klatki piersiowej we wdechu (cm):</span>
          <p>{measurement.chest_breath || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Obwód klatki piersiowej w wydechu (cm):</span>
          <p>{measurement.chest_exhaust || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Obwód ramienia (cm):</span>
          <p>{measurement.shoulder || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Obwód ramienia w napięciu (cm):</span>
          <p>{measurement.shoulder_tonus || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Obwód talii (cm):</span>
          <p>{measurement.waist || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Obwód bioder (cm):</span>
          <p>{measurement.hip || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Obwód przedramienia (cm):</span>
          <p>{measurement.forearm || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Obwód uda (cm):</span>
          <p>{measurement.thigh || "_"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Obwód łydki (cm):</span>
          <p>{measurement.calf || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Grubość fałdu skórno-tłuszczowego nad bicepsem (cm):</span>
          <p>{measurement.biceps || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Grubość fałdu skórno-tłuszczowego nad tricepsem (cm):</span>
          <p>{measurement.triceps || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>
            Grubość fałdu skórno-tłuszczowego pod dolnym kątem łopatki (cm):
          </span>
          <p>{measurement.shoulder_blade || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>
            Grubość fałdu skórno-tłuszczowego nad talerzem biodrowym (cm):
          </span>
          <p>{measurement.ala_of_ilium || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>
            Grubość fałdu skórno-tłuszczowego nad kolcem biodrowym przednim
            górnym (cm):
          </span>
          <p>{measurement.iliac_spine || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Wskaźnik WHtR talia/wzrost:</span>
          <p>{measurement.whtr || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Wskaźnik WHR talia/biodra:</span>
          <p>{measurement.whr || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>Procentowa zawartość tkanki tłuszczowej YMCA:</span>
          <p>{measurement.ymca || "-"}</p>
        </Styled.InfoItem>
      </Styled.InfoWrapper>
    </>
  );
};

export default Measurement;
