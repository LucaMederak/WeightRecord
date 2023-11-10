import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

//interfaces
import { IChildrenProps } from "@/interfaces/children.interfaces";

//context
import { useAlert } from "@/context/Alert.context";

//components
import Alert from "@/components/alert/Alert";
import PageLoading from "@/components/pageLoading/PageLoading";

//services
import { getUser } from "@/services/user.service";

const AuthLayout = ({ children }: IChildrenProps) => {
  const { alert, handleAlert } = useAlert();
  const router = useRouter();
  const { user, userLoading, loggedOut } = getUser();

  useEffect(() => {
    if (user && !loggedOut) {
      router.push("/dashboard/home");
    }
  }, [user, loggedOut]);

  if (userLoading || user) return <PageLoading />;

  return (
    <>
      {children}
      <AnimatePresence>
        {alert.display && <Alert type={alert.type} title={alert.message} />}
      </AnimatePresence>
    </>
  );
};

export default AuthLayout;
