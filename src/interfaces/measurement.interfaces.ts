import { IClientData } from "./client.interfaces";
import { IUserData } from "./user.interfaces";

export interface IMeasurementData {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUserData["_id"];
  client: IClientData["_id"];
  name: string;
  date: Date;
  notes?: string;
  weight: number;
  height: number;
  bmi: number;
  ppmMifflin: number;
  ppmHarris: number;
  cpm: number;
  whr?: number;
  whtr?: number;
  ymca?: number;
  //circuits
  chest_breath?: number;
  chest_exhaust?: number;
  shoulder?: number;
  shoulder_tonus?: number;
  waist?: number;
  hip?: number;
  forearm?: number;
  thigh?: number;
  calf?: number;
  //lappets
  biceps?: number;
  triceps?: number;
  shoulder_blade?: number;
  ala_of_ilium?: number;
  iliac_spine?: number;
}
