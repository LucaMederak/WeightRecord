import axiosInstance from "./axiosInstance";

export const fetcher = async (url: string, headers = {}) => {
  const res = await axiosInstance.get(url, {
    headers,
    withCredentials: true,
  });
  return res.data;
};
