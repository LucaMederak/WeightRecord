import { IAssetData } from "./asset.interfaces";

export interface IUserData {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: IAssetData;
}
