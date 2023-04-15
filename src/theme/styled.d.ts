import "styled-components";
import { ITheme } from "./violetTheme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
