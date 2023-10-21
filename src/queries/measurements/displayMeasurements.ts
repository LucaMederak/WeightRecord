import { IColumn } from "@/components/table/Table";
import { IMeasurementData } from "@/interfaces/measurement.interfaces";
import { format } from "date-fns";

export const measurementColumns: IColumn[] = [
  { label: "nazwa", key: "name", type: "text" },
  { label: "data", key: "date", type: "text" },
  { label: "klient", key: "client", type: "text" },
  { label: "masa ciała (kg)", key: "weight", type: "text" },
  { label: "wysokość ciała (cm)", key: "height", type: "text" },
  { label: "bmi", key: "bmi", type: "text" },
  { label: "ppm (mifflin)", key: "ppmMifflin", type: "text" },
  { label: "ppm (harris)", key: "ppmHarris", type: "text" },
  { label: "cpm", key: "cpm", type: "text" },
];

export const getMeasurementsData = (measurements: IMeasurementData[]) => {
  const measurementsData = measurements.map((measurement) => ({
    _id: measurement._id,
    name: measurement.name,
    date: format(new Date(measurement.date), "dd.MM.yyyy"),
    client: measurement.client.firstName + " " + measurement.client.surname,
    weight: measurement.weight,
    height: measurement.height,
    bmi: measurement.bmi,
    ppmMifflin: measurement.ppmMifflin,
    ppmHarris: measurement.ppmHarris,
    cpm: measurement.cpm,
  }));

  return measurementsData;
};
