import useSWR from "swr";
import { IMeasurementData } from "@/interfaces/measurement.interfaces";
import { fetcher } from "@/utils/swrFetcher";

export const useMeasurements = () => {
  const { data, error } = useSWR<IMeasurementData[]>(
    `/api/measurements`,
    fetcher
  );

  return {
    measurements: data,
    measurementsLoading: !error && !data,
    measurementsError: error,
  };
};

export const useMeasurement = (measurementId: string) => {
  const { data, error } = useSWR<IMeasurementData>(
    `/api/measurements/${measurementId}`,
    fetcher
  );

  return {
    measurement: data,
    measurementLoading: !error && !data,
    measurementError: error,
  };
};
