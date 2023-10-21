import { IColumn } from "@/components/table/Table";
import { IClientData } from "@/interfaces/client.interfaces";
import { format } from "date-fns";

type IClientToDisplayData = Pick<
  IClientData,
  "_id" | "firstName" | "surname" | "dateOfBirth" | "email"
>;

interface IClientColumn extends IColumn {
  key: keyof IClientToDisplayData;
}

export const clientColumns: IClientColumn[] = [
  { label: "imię", key: "firstName", type: "text" },
  { label: "nazwisko", key: "surname", type: "text" },
  { label: "data urodzenia", key: "dateOfBirth", type: "text" },
  { label: "email", key: "email", type: "text" },
];

export const getClientsData = (clients: IClientData[]) => {
  const clientsData = clients.map<IClientToDisplayData>((client) => ({
    _id: client._id,
    firstName: client.firstName,
    surname: client.surname,
    dateOfBirth: format(new Date(client.dateOfBirth), "dd.MM.yyyy"),
    email: client.email || "-",
  }));

  return clientsData;
};
