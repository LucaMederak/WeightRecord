import { measurementInfoSchema } from "./measurementInfo.schema";
import { measurementBasicSchema } from "./measurementBasic.schema";
import { measurementAdditionalSchema } from "./measurementAdditional.schema";
import { IMeasurementInputData } from "@/interfaces/measurement.interfaces";

export const measurementSchema = measurementInfoSchema
  .concat(measurementBasicSchema)
  .concat(measurementAdditionalSchema);

export const defaultMeasurementInputData: IMeasurementInputData =
  measurementSchema.cast({});
