import { lightTheme } from "@retriever-ui/react";
import "@emotion/react";

type ThemeType = typeof lightTheme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
