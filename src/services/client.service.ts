import useSWR from "swr";
import { IClientData, IClientInputData } from "@/interfaces/client.interfaces";
import { fetcher } from "@/utils/swrFetcher";
import axiosInstance from "@/utils/axiosInstance";
const clientsApiUrl = "/api/clients";

export const getClients = () => {
  const { data, error } = useSWR<IClientData[]>(`${clientsApiUrl}`, fetcher);

  return {
    clients: data,
    clientsLoading: !error && !data,
    clientsError: error,
  };
};

export const getClient = (clientId: string) => {
  const { data, error } = useSWR<IClientData>(
    `${clientsApiUrl}/${clientId}`,
    fetcher
  );

  return {
    client: data,
    clientLoading: !error && !data,
    clientError: error,
  };
};

export const addClient = async (data: IClientInputData) => {
  try {
    const newClient = await axiosInstance.post<IClientData>(
      `${clientsApiUrl}`,
      data,
      {
        withCredentials: true,
      }
    );

    return newClient;
  } catch (e) {
    throw e;
  }
};

export const updateClient = async (
  data: IClientInputData,
  clientId: string
) => {
  try {
    const updatedClient = await axiosInstance.put<IClientData>(
      `${clientsApiUrl}/${clientId}`,
      data,
      {
        withCredentials: true,
      }
    );

    return updatedClient;
  } catch (e) {
    throw e;
  }
};

export const deleteClient = async (clientId: string) => {
  try {
    return await axiosInstance.delete(`${clientsApiUrl}/${clientId}`, {
      withCredentials: true,
    });
  } catch (e) {
    throw e;
  }
};
