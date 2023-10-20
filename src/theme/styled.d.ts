import "styled-components";
import { ITheme } from "./blueTheme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
