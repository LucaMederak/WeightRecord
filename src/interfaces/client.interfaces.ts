import { IUserData } from "./user.interfaces";

type IDisease =
  | "flatulence"
  | "constipation"
  | "reflux"
  | "obesity"
  | "osteoporosis"
  | "gout"
  | "atherosclerosis"
  | "hypertension"
  | "tumor";

type IAlergen = "peanuts" | "rye" | "eggProtein";

export interface IClientInputData {
  firstName: string;
  surname: string;
  dateOfBirth: string;
  gender: "male" | "female";
  email?: string;
  phoneNumber?: string;
  street?: string;
  zipCode?: string;
  city?: string;
  notes?: string;
  diseases?: IDisease[];
  alergens?: IAlergen[];
  expectedBodyWeight?: number;
  specificAims?: string[];
  pal: number;
}

export interface IClientData extends IClientInputData {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUserData["_id"];
}
