import useSWR from "swr";
import { IClientData } from "@/interfaces/client.interfaces";
import { fetcher } from "@/utils/swrFetcher";

export const useClients = () => {
  const { data, error } = useSWR<IClientData[]>(`/api/clients`, fetcher);

  return {
    clients: data,
    clientsLoading: !error && !data,
    clientsError: error,
  };
};

export const useClient = (clientId: string) => {
  const { data, error } = useSWR<IClientData>(
    `/api/clients/${clientId}`,
    fetcher
  );

  return {
    client: data,
    clientLoading: !error && !data,
    clientError: error,
  };
};
