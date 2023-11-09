import { IMeasurementInputData } from "@/interfaces/measurement.interfaces";
import * as yup from "yup";

type IMeasurementAdditionalInput = Pick<
  IMeasurementInputData,
  | "whr"
  | "whtr"
  | "ymca"
  | "chest_breath"
  | "chest_exhaust"
  | "shoulder"
  | "shoulder_tonus"
  | "waist"
  | "hip"
  | "forearm"
  | "thigh"
  | "calf"
  | "biceps"
  | "triceps"
  | "shoulder_blade"
  | "ala_of_ilium"
  | "iliac_spine"
>;

export const measurementAdditionalSchema: yup.ObjectSchema<IMeasurementAdditionalInput> =
  yup.object().shape({
    whr: yup.number().positive(),
    whtr: yup.number().positive(),
    ymca: yup.number().positive(),
    chest_breath: yup.number().positive(),
    chest_exhaust: yup.number().positive(),
    shoulder: yup.number().positive(),
    shoulder_tonus: yup.number().positive(),
    waist: yup.number().positive(),
    hip: yup.number().positive(),
    forearm: yup.number().positive(),
    thigh: yup.number().positive(),
    calf: yup.number().positive(),
    biceps: yup.number().positive(),
    triceps: yup.number().positive(),
    shoulder_blade: yup.number().positive(),
    ala_of_ilium: yup.number().positive(),
    iliac_spine: yup.number().positive(),
  });
