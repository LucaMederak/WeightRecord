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

export interface IClientData {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUserData["_id"];
  firstName: string;
  surname: string;
  dateOfBirth: Date;
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
