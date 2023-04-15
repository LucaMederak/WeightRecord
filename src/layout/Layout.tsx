import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";

//theme
import { ThemeProvider } from "styled-components";
import { blueTheme, darkBlueTheme } from "@/theme/blueTheme";

//context
import { useDarkMode } from "@/context/DarkMode";
import { AlertProvider } from "@/context/Alert.context";

//interfaces
import { IChildrenProps } from "@/interfaces/children.interfaces";

//components
import AuthLayout from "./auth/AuthLayout";
import DashboardLayout from "./dashboard/DashboardLayout";

const Layout = ({ children }: IChildrenProps) => {
  const router = useRouter();
  const { darkMode } = useDarkMode();

  const theme = darkMode ? darkBlueTheme : blueTheme;

  if (router?.pathname === "/404") {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  if (router?.pathname.includes("dashboard")) {
    return (
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <DashboardLayout>{children}</DashboardLayout>
        </AlertProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <AuthLayout>{children}</AuthLayout>
      </AlertProvider>
    </ThemeProvider>
  );
};

export default Layout;
