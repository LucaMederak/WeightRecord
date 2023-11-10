import React, { useState } from "react";
import Link from "next/link";
import { mutate } from "swr";

//styles
import * as Styled from "./AuthOption.styles";

//icons
import { FaUserAlt } from "react-icons/fa";
import Button from "@/components/button/Button";

//services
import { getUser, logoutUser } from "@/services/user.service";
//utils
import { handleApiErrors } from "@/utils/apiErrorsHandler";

//context
import { useAlert } from "@/context/Alert.context";

const AuthOption = () => {
  const { alert, handleAlert } = useAlert();
  const { user } = getUser();

  const [logoutLoading, setLogoutLoading] = useState<boolean>();

  const logout = async () => {
    setLogoutLoading(true);
    try {
      await logoutUser();
      handleAlert("success", `Wylogowano`);
      mutate("/api/user", null);
    } catch (e) {
      const { alertMessage } = handleApiErrors(e);
      handleAlert(
        "error",
        `Wystąpił błąd podczas wylogowania. ${alertMessage}`
      );
      setLogoutLoading(false);
    }
  };

  return (
    <Styled.AuthOptionWrapper>
      <Styled.PersonWrapper background={!user?.avatar}>
        {user?.avatar ? (
          <img src={user?.avatar?.url} />
        ) : (
          <span>
            <FaUserAlt />
          </span>
        )}

        <Styled.PersonInfoWrapper>
          <h2>{user?.name + " " + user?.lastName}</h2>
          <p>{user?.email}</p>
        </Styled.PersonInfoWrapper>
      </Styled.PersonWrapper>

      <Button onClick={logout} size="small">
        wyloguj się
      </Button>
    </Styled.AuthOptionWrapper>
  );
};

export default AuthOption;
