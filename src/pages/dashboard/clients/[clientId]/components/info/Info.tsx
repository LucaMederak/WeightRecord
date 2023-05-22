import React from "react";
import { format } from "date-fns";

//styles
import * as Styled from "./Info.styles";
import { IClientData } from "@/interfaces/client.interfaces";

interface IClientInfoProps {
  client: IClientData;
}

const Info = ({ client }: IClientInfoProps) => {
  return (
    <>
      <Styled.InfoWrapper>
        <Styled.InfoItem>
          <span>klient:</span>
          <p>
            {client.firstName} {client.surname}
          </p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>email:</span>
          <p>{client.email || "-"}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>data urodzenia:</span>
          <p>{format(new Date(client.dateOfBirth), "dd.MM.yyyy")}</p>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <span>współczynnik aktywności fizycznej (PAL):</span>
          <p>{client.pal || "-"}</p>
        </Styled.InfoItem>
      </Styled.InfoWrapper>
    </>
  );
};

export default Info;
