import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

//styles
import * as Styled from "./Clients.styles";

//queries
import { useClients } from "@/queries/useClients";

//icons
import { FaPlus } from "react-icons/fa";

//components
import ButtonLink from "@/components/buttonLink/ButtonLink";

const ClientsPage = () => {
  const router = useRouter();
  const { clients, clientsLoading, clientsError } = useClients();

  if (clientsLoading) return <div>loading...</div>;
  if (clientsError) return <div>error...</div>;

  return (
    <>
      <Styled.HeadingWrapper>
        <h1>Klienci</h1>
        <ButtonLink
          icon={<FaPlus />}
          text="Dodaj klienta"
          linkSize={"base"}
          variant="primary"
          link={`/dashboard/clients/new`}
        />
      </Styled.HeadingWrapper>

      {clients!.length > 0 && (
        <Styled.AvailableTermsWrapper>
          <Styled.TableWrapper>
            <Styled.TableHeadWrapper>
              <tr>
                <th>imię</th>
                <th>nazwisko</th>
                <th>data urodzenia</th>
                <th>email</th>
              </tr>
            </Styled.TableHeadWrapper>
            <Styled.TableBodyWrapper>
              {clients?.map((client) => (
                <tr
                  key={client._id}
                  onClick={() =>
                    router.push(`/dashboard/clients/${client._id}`)
                  }
                >
                  <td>{client.firstName}</td>
                  <td>{client.surname}</td>
                  <td> {format(new Date(client.dateOfBirth), "dd.MM.yyyy")}</td>
                  <td>{client.email}</td>
                </tr>
              ))}
            </Styled.TableBodyWrapper>
          </Styled.TableWrapper>
        </Styled.AvailableTermsWrapper>
      )}
    </>
  );
};

export default ClientsPage;
