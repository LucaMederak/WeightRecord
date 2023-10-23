import { render, RenderResult } from "@testing-library/react";
import { DarkModeProvider, useDarkMode } from "@/context/DarkMode";
import { IChildrenProps } from "@/interfaces/children.interfaces";
import { ThemeProvider } from "styled-components";
import { blueTheme, darkBlueTheme } from "@/theme/blueTheme";

export const LayoutProvider = ({ children }: IChildrenProps) => {
  const { darkMode } = useDarkMode();

  const theme = darkMode ? darkBlueTheme : blueTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const setupProviders = (Component: React.ReactElement) => {
  const component: RenderResult = render(
    <DarkModeProvider>
      <LayoutProvider>{Component}</LayoutProvider>
    </DarkModeProvider>
  );

  return component;
};
