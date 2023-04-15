import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";

//theme
import { ThemeProvider } from "styled-components";
import { blueTheme, darkBlueTheme } from "@/theme/blueTheme";

//context
import { useDarkMode } from "@/context/DarkMode";

//interfaces
import { IChildrenProps } from "@/interfaces/children.interfaces";

import { AlertProvider } from "@/context/Alert.context";

const Layout = ({ children }: IChildrenProps) => {
  const router = useRouter();
  const { darkMode } = useDarkMode();

  const theme = darkMode ? darkBlueTheme : blueTheme;

  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <div>{children}</div>
      </AlertProvider>
    </ThemeProvider>
  );
};

export default Layout;
