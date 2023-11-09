import useSWR from "swr";
import { IUserData } from "@/interfaces/user.interfaces";
import { fetcher } from "@/utils/swrFetcher";

export const useUser = () => {
  const { data, error } = useSWR<IUserData>(`/api/user`, fetcher);

  const loggedOut = error && error.response?.status === 403;

  return {
    user: data,
    loggedOut,
    userLoading: !error && !data,
    userError: error,
  };
};
