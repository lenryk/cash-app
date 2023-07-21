import "styled-components";
import { theme } from "./src/theme";

declare module "styled-components" {
  export type DefaultTheme = typeof theme;
}
