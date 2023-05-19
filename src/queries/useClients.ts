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
