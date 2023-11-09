import { clientInfoSchema } from "./clientInfo.schema";
import { clientAimsSchema } from "./clientAims.schema";
import { clientDiseasesSchema } from "./clientDiseases.schema";
import { IClientInputData } from "@/interfaces/client.interfaces";

export const clientSchema = clientInfoSchema
  .concat(clientDiseasesSchema)
  .concat(clientAimsSchema);

export const defaultClientInputData: IClientInputData = clientSchema.cast({});
