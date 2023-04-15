import { IUserData } from "./user.interfaces";

export interface IAssetData {
  user: IUserData["_id"];
  title: string;
  description?: string;
  url: string;
  type: string;
  size: number;
  key: string;
  provider: "AWS_S3" | "GCLOUD_STORAGE";
}
