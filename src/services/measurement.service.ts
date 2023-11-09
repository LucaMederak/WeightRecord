import useSWR from "swr";
import { fetcher } from "@/utils/swrFetcher";
import axiosInstance from "@/utils/axiosInstance";
import {
  IMeasurementData,
  IMeasurementInputData,
} from "@/interfaces/measurement.interfaces";

const measurementsApiUrl = "/api/measurements";

export const getMeasurements = () => {
  const { data, error } = useSWR<IMeasurementData[]>(
    `${measurementsApiUrl}`,
    fetcher
  );

  return {
    measurements: data,
    measurementsLoading: !error && !data,
    measurementsError: error,
  };
};

export const getClientMeasurements = (clientId: string) => {
  const { data, error } = useSWR<IMeasurementData[]>(
    `${measurementsApiUrl}/clients?clientId=${clientId}`,
    fetcher
  );

  return {
    clientMeasurements: data,
    clientMeasurementsLoading: !error && !data,
    clientMeasurementsError: error,
  };
};

export const getMeasurement = (measurementId: string) => {
  const { data, error } = useSWR<IMeasurementData>(
    `${measurementsApiUrl}/${measurementId}`,
    fetcher
  );

  return {
    measurement: data,
    measurementLoading: !error && !data,
    measurementError: error,
  };
};

export const addMeasurement = async (data: IMeasurementInputData) => {
  try {
    const newMeasurement = await axiosInstance.post<IMeasurementData>(
      `${measurementsApiUrl}`,
      data,
      {
        withCredentials: true,
      }
    );

    return newMeasurement;
  } catch (e) {
    throw e;
  }
};

export const updateMeasurement = async (
  data: IMeasurementInputData,
  measurementId: string
) => {
  try {
    const updatedMeasurement = await axiosInstance.put<IMeasurementData>(
      `${measurementsApiUrl}/${measurementId}`,
      data,
      {
        withCredentials: true,
      }
    );

    return updatedMeasurement;
  } catch (e) {
    throw e;
  }
};

export const deleteMeasurement = async (measurementId: string) => {
  try {
    return await axiosInstance.delete(
      `${measurementsApiUrl}/${measurementId}`,
      {
        withCredentials: true,
      }
    );
  } catch (e) {
    throw e;
  }
};
