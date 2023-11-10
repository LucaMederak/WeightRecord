import useSWR from "swr";
import {
  ILoginUserInputData,
  IRegisterUserInputData,
  IUserData,
  IUserSessionResponseData,
} from "@/interfaces/user.interfaces";
import { fetcher } from "@/utils/swrFetcher";
import axiosInstance from "@/utils/axiosInstance";

const userApiUrl = "/api/user";
const userSessionApiUrl = "/api/sessions";

export const getUser = () => {
  const { data, error } = useSWR<IUserData>(`${userApiUrl}`, fetcher);

  const loggedOut = error && error.response?.status === 403;

  return {
    user: data,
    loggedOut,
    userLoading: !error && !data,
    userError: error,
  };
};

export const registerUser = async (data: IRegisterUserInputData) => {
  try {
    const newUser = await axiosInstance.post<IUserData>(`${userApiUrl}`, data, {
      withCredentials: true,
    });

    return newUser;
  } catch (e) {
    throw e;
  }
};

export const loginUser = async (data: ILoginUserInputData) => {
  try {
    const userSession = await axiosInstance.post<IUserSessionResponseData>(
      `${userSessionApiUrl}`,
      data,
      {
        withCredentials: true,
      }
    );

    return userSession;
  } catch (e) {
    throw e;
  }
};

export const logoutUser = async () => {
  try {
    await axiosInstance.delete(`${userSessionApiUrl}`, {
      withCredentials: true,
    });
  } catch (e) {
    throw e;
  }
};
