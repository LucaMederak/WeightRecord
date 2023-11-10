import { IAssetData } from "./asset.interfaces";

export interface IUserSessionResponseData {
  accessToken: string;
  refreshToken: string;
}

export interface ILoginUserInputData {
  email: string;
  password: string;
}

export interface IRegisterUserInputData extends ILoginUserInputData {
  name: string;
  lastName: string;
}

export interface IUserData {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: IAssetData;
}
