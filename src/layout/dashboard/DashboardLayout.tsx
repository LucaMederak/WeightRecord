import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//interfaces
import { IChildrenProps } from "@/interfaces/children.interfaces";

//styles
import * as Styled from "./DashboardLayout.styles";

//components
import Sidebar from "./sidebar/Sidebar";
import Nav from "./nav/Nav";
import PageLoading from "@/components/pageLoading/PageLoading";

//queries
import { useUser } from "@/queries/useUser";

export type DashboardView = "default" | "rolledUp";

const DashboardLayout = ({ children }: IChildrenProps) => {
  const router = useRouter();
  const { user, userLoading, loggedOut } = useUser();
  const [view, setView] = useState<DashboardView>("default");

  useEffect(() => {
    if (!user && loggedOut) {
      router.push("/auth/login");
    }
  }, [user, loggedOut]);

  if (userLoading || loggedOut) return <PageLoading />;

  const handleChangeView = () => {
    if (view === "default") {
      return setView("rolledUp");
    }

    return setView("default");
  };

  return (
    <Styled.DashboardContainer>
      <Sidebar view={view} changeView={handleChangeView} />
      <Styled.DashboardContentContainer view={view}>
        <Nav />
        <Styled.DashboardContentWrapper>
          {children}
        </Styled.DashboardContentWrapper>
      </Styled.DashboardContentContainer>
    </Styled.DashboardContainer>
  );
};

export default DashboardLayout;
