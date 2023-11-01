import { render, RenderResult } from "@testing-library/react";
import { DarkModeProvider, useDarkMode } from "@/context/DarkMode";
import { IChildrenProps } from "@/interfaces/children.interfaces";
import { ThemeProvider } from "styled-components";
import { blueTheme, darkBlueTheme } from "@/theme/blueTheme";

import { NextRouter } from "next/router";

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    forward: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...router,
  };
}

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
